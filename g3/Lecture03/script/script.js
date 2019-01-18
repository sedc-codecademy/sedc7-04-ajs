let o = {};
let o1 = new Object();

// console.log("dasdaso" + o.toString());

let arr = [];
let arr1 = new Array();

arr1[0]= 3;
arr1[1] = 4;
arr1[2] = 1;

console.log(arr1);

let arr2 = new Array(6,54,3,2,9,7,54);

arr2.push(3,6,788,77,554,444);
arr2.pop(444);
// console.log(arr2.join(" - "));
console.log(arr2.sort());

console.log("slice", arr2.slice(5,10));
console.log("splice", arr2.splice(5,4));
//input [1,2,3,4,5,6,7,8,9]
//output reverse array
// input [1,2,3,4,5,6,7,8,9]
//length of array 9

// input [6,4,2,8,1]
// output [8,6,4,2,1]

function myFn(param){
    return param;
}


var sum = function(a,b){
    return a + b;
}
sum(1,4);

// let valueOfFn = myFn(3);

console.log(sum(1,4));

let fn = new Function('a','b','c','return a + b');

console.log(fn(2,3));


var person = {
    name: "Bil",
    age: 44,
    sayMyName: function(){
        return "My name is " + this.name;
    }
};

function newFunction() {}

newFunction.prototype = person;

var newPerson = new newFunction();

// console.log(newPerson.sayMyName());






Array.prototype.yourName = function(){
    console.log(this);
    return "Your name is ";
}

let niza444 = [3,4,56,6,78];


niza444.yourName();





Array.prototype.returnString = function(){

   console.log( this.length);
   for (const item of this) {
    console.log(item);
   }
    // return cela niza kako String;
}



// let testNIza = [4,3,2,3,434];
// testNIza.returnString();

let str = "Jako gubime";

let rakomet = new String("Ideme doma!");

String.prototype.isPalindorm = function(){
   //ako e tocno true vrati
   //ako ne false vrati
}

let wwww= new String("ABBA");
console.log(wwww.isPalindorm());

//ANA
//ABBA
//Stats
//Wow
//Tenet
//Solos

//121
//221122


let date = new Date('1/1/2019');

console.log(date);
















