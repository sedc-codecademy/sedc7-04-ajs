/*
1. Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.
*/
let o = {firstName: 'John', lastName: 'Doe'};

//Your name is John Doe

function displayStudentInfo(obj){
  var {first, last} = obj;
  return `Your full name is ${first} ${last}`;
}

displayStudentInfo(o);

/*
2.
	Using destructing get the value "C" from the object and assing it to a variable
	
	let o = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
*/

	var {
		  prop: x,
		  prop2: {
		    prop2: {
		      nested: [ , , b]
		    }
		  }
		} = o;
		console.log(b);

/*
	3. Using MAP from array (array.map), print in console log the first and last name of each person in the array, using object destructing
	
	let names = [
		['Mary', 'Williams'],
		['John', 'Cooper'],
		['Jane', 'Collins'],
		['George', 'Noble']
	]
	
	IN CONSOLE
		Mary Williams
		John Cooper
		Jane Collins
		George Noble
*/
	names.map(([firstName, lastName]) => {
	  console.log(firstName, lastName)
	})
/*
	4. Get the item before the last from the following array using object destruction
	
	let N = 1000;
	let arr = Array.apply(null, {length: N}).map(Number.call, Number);
	(we need the value of arr[998])
*/

arr.reverse();
let [, n998] = arr;


let o = {name: 'John', last: 'Doe', age: 33};

delete o.age;

/*
	5. Using the object below remove the property "nested" using Object.keys, values, for loop etc
	
	let o = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
*/