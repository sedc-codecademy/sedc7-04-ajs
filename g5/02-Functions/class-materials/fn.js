//Sample function with name
function thisIsNameFN(){

    return 1+2;
}


//Sample anonymous function which is assigned to a variable as value
let fnName = function(){
    return 1+2;
}

thisIsNameFN(); //Calling the sample function

fnName(); //Calling the function (through the variable name)


//Assign an anonymous function as property value of an JavaScript object
let objectName = {
    thisIsRandomFunction: function(){}
}


//Definition of a sample function with parameters
function functionWithParameter(a, b, c){}


//Sample of a pure function
var timesTwo = function(number) {
    return number * 2;
};

timesTwo(4);

//Looks like pure function but it isn't pure function by definition, since it has external variable that might affect to the outcome
var multiplier = 5;
var timesTwoNotPure = function(number) {
    return number * multiplier;
};


/* Arrow Functions /*/

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materials.map(material => material.length));

//materials.map when we destruct it and see how it works in background (example above)
function materialLength(material)
{
  return material.length;
}

let result = [];

for(let i = 0; i < materials.length; i++)
{
  result.push(materialLength(materials[i]));
}

console.log(result);


//Syntax representation of Arrow function
(param1, param2, ...) => {
  //statement
}

//  (data) => return data.json();
//  param1 => return 2;
//  (a, b) => return a+b;

//ES6 -- ECMAScript 6 (Convert the example from Ajax class to a ES6 syntax)
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(data => console.log(data))

//ES7 (Convert the example from Ajax class to a ES7 syntax)

(async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();
    console.log(data)
})


/* Spread Syntax */
function one(a,b,c) //Define function with pre-defined arguments
{

}

let numbers = [1,2,3];

function two(...args) //Define function which has an argument that gets values through spread syntax
{
    console.log(args);
}

two(numbers);

one([1,2,3]);

