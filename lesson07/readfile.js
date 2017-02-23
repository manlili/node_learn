var fs = require('fs');
fs.readFile('test.txt',function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log("异步读取的文件内容是："+data.toString());
})

var data = fs.readFileSync('test.txt');
console.log("同步读取的文件内容是："+data.toString());