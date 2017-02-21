var url = require("url");
var obj = {
   protocol: 'https:',
   slashes: true,
   auth: null,
   host: 'github.com',
   port: null,
   hostname: 'github.com',
   hash: '#123',
   search: '?form=shanghai&name=lili',
   query: 'form=shanghai&name=lili',
   pathname: '/manlili/node_learn',
   path: '/manlili/node_learn?form=shanghai&name=lili',
}
var b = url.format(obj);
console.log(b);