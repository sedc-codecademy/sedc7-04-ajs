// function sayHello(name){
//     console.log(`Hello ${name}!`);
// }

// sayHello("Dejan");
// console.log(document);

const say = require('./say');
const txtService = require('./textService');
// console.log(say);
// console.log(say.sayHello("Dejan"));
// console.log(say.sayBye("Dragan"));
// console.log(say.hello("Billy"));
// console.log(say.bye("Billy"));

//txtService.addText("Hello SEDC!");
//txtService.appendText(" and we are learning NODE.JS");
console.log(txtService.addText("This is a test!"));

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });