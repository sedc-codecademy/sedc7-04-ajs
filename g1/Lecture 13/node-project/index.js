// const lib = require("./lib");

// const square = lib.square;
// const cube = lib.cube;

// const square = require("./lib").square;

const { cube, square } = require("./lib");
const three = require("./three");

console.log(three);

console.log("Hello from node");

console.log(`Square of 3 is ${square(3)}`);
console.log(`Cube of 3 is ${cube(3)}`);