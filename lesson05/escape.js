var querystring = require("querystring");
var c = querystring.escape("<中文>");
console.log(c);