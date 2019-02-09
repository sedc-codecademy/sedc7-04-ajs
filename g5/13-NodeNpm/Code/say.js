function hello(name){
    return "Hey there " + name;
}
function bye(name){
    return "Goodbye there " + name;
}
//module.exports = 5;
// module.exports = hello; // only export hello
// module.exports = bye; // only export bye
module.exports = {bye: bye, hello: hello}; // export both in an object