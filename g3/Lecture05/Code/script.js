'use strict';

// var tax = 20;
// function priceAfterTax(price, funcTax){
//     funcTax(price);
//     return price * (tax/100);
// }
// console.log(priceAfterTax(5,priceAfterTax2));

// tax = 40;
// console.log(priceAfterTax(5));



// function priceAfterTax2(price){
//     let tax = 20;
//     return price * 0.2;
// }

// function priceAfterTax(price,tax){
//     return price * (tax/100);
// }
// console.log(priceAfterTax(5,20));
// console.log(priceAfterTax(5,25));


// $("div").on("focus", priceAfterTax)

// $("div").on("focus", function(){
//     priceAfterTax(200,15);
// })

// var myFunc = function(x){

// }

// var c = 10;
// while(c>0){
// console.log(c);
// c--;
// }


// (function Print(){
//     console.log("Hello I am Self Invoked functions");
// })();


// (function PrintWithParam(message){
//     console.log(message);
// })("Hello I am Self Invoked functions with PARAMETERS");


//globaltest = 15;
// function sum(a,b){
//     var local = true;
//     function max(){
//         console.log(local);
//     }
//     return max;
// }
// function makeFunc() {
//     var name = 'Mozilla';
//     var newVar = "makeFunc";
//     function displayName(x) {
//       alert("new");
//       newVar;
//       global;
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc(true);
  
//   addEventListener("focus", function(){
//       var input = this.text
//     priceAfterTax(input);
//   })

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }


//var undefined = 5;
//console.log(undefined);
//globalVar = true;
let global2 = true;
global2 = false;
function newFunc(){
    //global1 = 5;
    var local= "nesht";
    //test = true;
   
}
newFunc(5);

//let eval = 5;

var newObject = {
    get x() {return 17},
    y: 15,
};
//newObject.x = 5;
console.log(newObject.x);
