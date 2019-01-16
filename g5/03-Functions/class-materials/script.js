

`${variableName}`

'<li>'+variableName+'</li>';
`<li>${variableName}</li>`; //ES6 alternative for the libe above



'<li>\
	<span>'+variableName+'</span>\
</li>'

`
<li>
	<span>${variableName}</span>
</li>
`

let a = 5, b = 15;
`The result is: ${ a + b }`;x

//Math.random()

function randomNumber()
{
	return Math.random();
}

function generateRandomNumber(min , max)
{
    return Math.random() * (max-min) + min ;
}

//Math.min()
Math.min(10, 32, 2);

//2

Math.min(-10, -32, -1)

//-32

Math.min()
// -Infinity

Math.min(10,2,NaN)
//NaN




//Math.max()

Math.max(1, 2, 3, 4); // 4

Math.max(1, 2, 3, NaN);


let numbers = [1, 2, 3, 4];

Math.max.apply(null, numbers); //4
Math.min.apply(null, numbers); //1


//Recursion

//factorial of 5 is 5 x 4 x 3 x 2 x 1.

function factorial( n ) {
  if ( n === 1 ) {
   	 return 1;
  }
  return n * factorial( n - 1 );
}

function something(i)
{
	if(i === 10)
	return 1;
	
	if(i === 100)
	return 10;
	
	if(i === 200)
	return 20;
	
	return i;
}


//Anonymous functions

let multiply = function(x, y)
{
	return x * y;
}

multiply(2, 3); //6


//Impure functions
let tax = 18;

function calculateTax(productPrice)
{
	return ((productPrice * tax) / 100) + productPrice;
}


//Closures

function printBrowserName()
{
	let name = 'Mozilla';
	
	function alertName()
	{
		alert(name);
	}
	
	return alertName;
}

let tmpFunction = printBrowserName();
tmpFunction();

/*
 let name = '';
 
	function printBrowserName()
	{
		name = 'Mozilla';
	}
 
	function alertName()
	{
		alert(name);
	}
	
	printBrowserName();
	
	alertName();
	
*/


// Strict / NonStrict

//default nonstrict;

var undefined = 5; //undefined

function test(a)
{
	return a * 10;
}


'use strict';
var undefined = 5;


'use strict';
function test(a)
{
	return a * 10;
}
