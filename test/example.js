//步骤一、引入 required 模块:我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http，实例如下:
var http = require('http');   //第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。
//步骤二、创建服务器:使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 10086 端口。 函数通过 request, response 参数来接收和响应数据
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello Node\n');
}).listen(10086,'127.1.1.1'); //接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。

console.log('Server running at http://127.1.1.1:10086/');