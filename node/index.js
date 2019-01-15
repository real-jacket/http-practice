const http = require('http')
const port = process.argv[2]

const server = http.createServer(function (request, response) {
  const { method, url, headers } = request
  const userAgent = headers['user-agent']
  let path
  if (url.indexOf('?') !== -1) {
    path = url.split('?')[0]
  } else {
    path = url
  }

  // let body = []
  // request.on('data', (chunk) => {
  //     body.push(chunk)
  // }).on('end', () => {
  //     body = Buffer.concat(body).toString()
  // })

  // request.on('error', (err) => {
  //     console.error(err.stack)
  // })
  console.log('HTTP 路径为\n' + path)
  if (method === 'POST' && path === '/login') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    response.write('<html>')
    response.write('<body>')
    response.write('<h1>hello world</h1>')
    response.write('</body>')

    response.end()
  } else {
    response.statusCode = 404
  }
})

if (!port) {
  console.log('请输入端口，好不好嘛!例如：node ./node/index.js 8888')
}
server.listen(port)
