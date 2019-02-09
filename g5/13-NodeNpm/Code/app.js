const say = require('./say');
const textService = require('./textService');
console.log("My script is loaded!");

//console.log(say); // if say.js exports = hello();
// 1. app.js is called from console
// 2. require tries to get exports from say.js
// 3. say.js has say function. It calls it and puts it in exports
// 4. Now in exports we have a result of the say() call - Hello there undefined
// 5. Requier gets the result which is Hello there undefined
// 6. The result is stored in the say constant
// 7. When we console.log(say) we get the result Hello there undefined

//console.log(say("Dejan")); // if say.js exports = hello;
// 1. app.js is called from console
// 2. require tries to get exports from say.js
// 3. say.js has say function. It exprots the whole function
// 4. requier in app.js gets the whole function as a result
// 5. the whole function is stored in say constant
// 6. We call the say as a function in the console.log and returns Hello there Dejan
// console.log(say);
// console.log(say.hello("dejan"));
// console.log(say.bye("dejan"));
// console.log(say.bye("dragan"));

// console.log(textService);

textService.addText("Hello SEDC!");
textService.appendText("\n We are learning about node.js!");
console.log(textService.readText());