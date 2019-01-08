const http = require('http')
const port = process.argv[2]

const server = http.createServer(function (request, response) {
    const { method, url,headers } = request
    const userAgent = headers['user-agent']

    // let body = []
    // request.on('data', (chunk) => {
    //     body.push(chunk)
    // }).on('end', () => {
    //     body = Buffer.concat(body).toString()
    // })

    // request.on('error', (err) => {
    //     console.error(err.stack)
    // })
    console.log('HTTP 路径为\n' + url)
    if (method === 'GET' && url === '/login'){
        console.log(request)
        
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        
        response.write('<html>')
        response.write('<body>')
        response.write('<h1>hello world</h1>')
        response.write('</body>')

        response.end()
    }
})

if(!port){
    console.log('请输入端口，好不好嘛!例如：node ./node/index.js 8888');
    return
}
server.listen(port)