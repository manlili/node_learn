var fs = require('fs');
fs.writeFile('lili.txt', '我是一只猪', function (err) {
	if (err) {
       return console.error(err);
   }
})
fs.readFile('lili.txt',function(err, data) {
	console.log("异步读取文件数据: " + data.toString());
})