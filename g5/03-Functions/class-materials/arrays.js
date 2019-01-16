//Array , applied to JS arrays [].map();

//MDN - mozilla developer network   https://developer.mozilla.org/
//igor.joshevski@seavus.com

//map

var array1 = [1, 4, 9, 16];
let array2 = array1.map(x => x *2);
console.log(array2);

/* inside map

	for(let i = 0; i < array1.length; i++)
	{
		array2.push(array1[i] * 2);
	}
	
	return array2;
*/

let array3 = array1.map((x) => {
	
	function multiply(a, b)
	{
		return a * b;
	}
	
	if(x > 4)
	{
		return multiply(x, 2);
	}
});

function multiplyFn(x, i)
{
	return x * i;
}

let array4 = array1.map((x, i) => multiplyFn(x, i));

//concat

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));

//fill

let array1 = [1,2,3]; //array1 = Array.fill();
//array.fill(value, start_index, end_index);
array1.fill(0, 3, 5);

array1.fill((x) => {
	return x * 2;
}(), 0, 2);


//filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((item, i) => item.length > 6);

console.log(result);


//find
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element, i) {
  return element > 10;
});



//forEach

var array1 = ['a', 'b', 'c'];

array1.forEach((element, i) => {
  console.log(element);
});


//join

var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain

let uri = ['http://api.endpoint.com', 'todos', 1];
let url = uri.join("/");
//http://api.endpoint.com/todos/1

// 'http://api.endpoint.com/' + '/todos' + '/1'


//keys
var array1 = ['a', 'b', 'c'];
var iterator = array1.keys();
  
for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}



//push

var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));

//pop

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

//splice
var months = ['Jan', 'March', 'April', 'June'];
//months.splice(startIndex, deleteCount, items)
months.splice(1, 0, 'Feb');
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']


months.splice(4, 1, 'May');
// replaces 1 element at 4th index
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

//indexOf

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf('bison', 2)); //2 is startFrom or start index for forloop

console.log(beasts.indexOf('giraffe')); //-1

//reduce
const array1 = [1, 2, 3, 4];

console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));

let amount = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
//10

let amount2 = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 5)
//15