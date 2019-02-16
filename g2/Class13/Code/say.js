function hello(name){
    return "Hey there " + name;
}
function bye(name){
    return "Goodbye there " + name;
}
function sum(num1, num2){
    return num1 + num2;
}
let result = sum(2,3);
// module.exports = result;
// module.exports = hello; // only export hello
// module.exports = bye; // only export bye
module.exports = {sayBye: bye, sayHello: hello}; // export both in an object