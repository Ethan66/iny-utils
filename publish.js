const fs = require('fs')
const https = require('https')
const jszip = require('jszip')

const argv = process.argv
const un = argv[2]
const pw = argv[3]
const em = argv[4]
const r = argv[5]
const gu = argv[6]
const gp = argv[7]
const exec = require('child_process').exec

const config = require('./package.json')
const FormData = require('form-data')

const zip = new jszip()


if (un && pw && em && r) {
	const or = r.replace(/^https?:/, '')
	const result = `${or}/:always-auth=false
${or}/:_password=${pw}
${or}/:username=${un}
${or}/:email=${em}`
	fs.writeFileSync('./.cnpmrc', result)

	const versionArr = config.version.split('.')
	let l = versionArr.length

	while (l--) {
		if (versionArr[l] < 10) {
			versionArr[l]++
			if (l !== versionArr.length - 1) {
				for (let m = versionArr.length - 1; m > l; m--) {
					versionArr[m] = 0
				}
			}
			break
		}
	}

	const publishVersion = versionArr.join('.')
	// 打版本号
	exec(
		`npm version ${publishVersion} --no-git-tag-version && git commit -am "[release] ${publishVersion} [skip ci]"`,
		(error, outMsg, errMsg) => {
			console.log(`exec out ---: ${outMsg}`)
			console.log(`exec err ---: ${errMsg}`)
			if (error) {
				console.log(errMsg)
				process.exit(1)
			}
			// cnpm 发布版本
			exec('cnpm publish --userconfig=./.cnpmrc --registry=' + r, (error, errMsg, outMsg) => {
				console.log(`exec out ---: ${outMsg}`)
				console.log(`exec err ---: ${errMsg}`)

				if (error) {
					console.log(errMsg)
					process.exit(1)
				}
				// 读取文件，压缩 doc
				readDir(zip, 'docs')
				zip
				.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
				.pipe(fs.createWriteStream('iny-utils.zip'))
				.on('finish', function() {
					const form = new FormData()
					form.append('file', fs.createReadStream('./iny-utils.zip'))
					const request = https.request('https://sys.inyoumall.com/product/upload', {
						method: 'POST',
						headers: form.getHeaders()
					}, res => {
						let data = ''
						res.setEncoding('utf8');
						res.on('data', (chunk) => {
							data += chunk
						});
						res.on('end', () => {
							const result = JSON.parse(data.toString())
							if (result.code === 200) {
								console.log('docs 上传成功')
									// 提交版本号
									exec(
										`git remote set-url origin http://${gu}:${gp}@gitlab.ldxinyong.com/igo/iny-utils.git && git push origin master`,
										(error, errMsg, outMsg) => {
											console.log(`exec out ---: ${outMsg}`)
											console.log(`exec err ---: ${errMsg}`)
											if (error) {
												console.log(errMsg)
												process.exit(1)
											}
										}
									)
							} else {
								console.log('docs 上传失败 --->', result.msg)
							}
						});
					})
					form.pipe(request)

					request.on('error', (err) => {
						console.log(err)
						process.exit(1)
					})
				})
			})
		}
	)
}

function readDir(obj, nowPath) {
  let files = fs.readdirSync(nowPath) //读取目录中的所有文件及文件夹（同步操作）
  files.forEach(function(fileName, index) {
    //遍历检测目录中的文件
    let fillPath = nowPath + '/' + fileName
    // console.log(fileName, index, nowPath, fillPath) //打印当前读取的文件名
    let file = fs.statSync(fillPath) //获取一个文件的属性
    if (file.isDirectory()) {
      //如果是目录的话，继续查询
      const parentPath = nowPath.split('/').slice(1).join('/')
      const dirPath = (parentPath ? parentPath + '/' + fileName : fileName)
      let dirlist = zip.folder(dirPath) //压缩对象中生成该目录
      readDir(dirlist, fillPath) //重新检索目录文件
    } else {
      obj.file(fileName, fs.readFileSync(fillPath)) //压缩目录添加文件
    }
  })
}
