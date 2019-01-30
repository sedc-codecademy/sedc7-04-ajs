//Object Destructing / Destruction

let someArray = [10, 20, 30];

var first = someArray[0];

var second = someArray[1];

var third = someArray[2];


let [first, second, third] = someArray; //let, var, const

let [,,third] = someArray; //third = 30;

let secondArray = [1, 2, [3], 5];

let [,,[thirdItem]] = secondArray;
console.log(thirdItem);

let secondArray = [1, 2, [3, 10, 20], 5];

let [,,[,,thirdItem]] = secondArray;
console.log(thirdItem);


let [indexOne, indexTwo, ...tail] = secondArray;

// indexOne= 1, indexTwo = 2, tail = [[3, 10, 20],5]

//Object

let a = {name: "John"};
let b = {name: "Jane"};

let {name: nameA} = a;
let {name: nameB} = b;

console.log(nameA, nameB);

var {foo, bar} =  {foo: 'lorem', bar: 'ipsum'};

// import { UserClass, UserAccounts } from "../../files/user.class.js";

function returnMultipleValues()
{
	return [1,2];
}

//OldWay
let result = returnMultipleValues();

let a = result[0];
let b = result[1];

//NewWay

let [a,b] = returnMultipleValues();

function returnMultipleValues() {

  return {
    foo: 1,
    bar: 2
  };

}

let  { foo, bar } = returnMultipleValues();
let  { foo: valueOfFoo, bar: valuesOfBar } = returnMultipleValues();


//Pre defined - default values

const [x=3, y=x] = [];     // x=3; y=3
const [x=3, y=x] = [7];    // x=7; y=7
const [x=3, y=x] = [7, 2]; // x=7; y=2

const { prop: x=123 } = {}; // x = 123

//Computed property
const FOO = 'foo';

let m = {foo: 123};

let f = m[FOO] //123

const { [FOO]: f } = m; // f = 123

