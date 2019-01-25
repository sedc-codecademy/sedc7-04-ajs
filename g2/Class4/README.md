# Functions pt3 &#x1F34E;
## Pure functions
Pure functions are functions that do not need or change anything in the outside world. There is no special syntax or code for pure functions. You wrote some pure functions until this point for sure without even knowing that you did it. Pure function is a state of a function that we always try to achieve. With pure function, our code is cleaner, more organised and decoupled ( with few connections and ties ). A code with pure functions is a code that can scale easily ( easier to continue working on and build on top of in the future ). Of course there are times when you need something from the outside or you need to change something outside of the function and it is not wrong to not write a function that is not pure. But every time you write a function ask your self:
* Can I request  for the stuff that I need through parameters instead of accessing them directly and get the same results?
* Can I return a value instead of changing a value from the outside directly and get the same results?
* Do I get the same result for passing the same arguments every time?
```javascript
// Pure function
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 1)
    }
    return result;
}

// Impure function  ( using a variable from the outside )
let one = 1
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + one)
    }
    return result;
}
// Impure function ( mutating data from the outside )
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] += 1
    }
    return numbers;
}

// Impure function ( changing the DOM outside of the function )
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
		result.push(numbers[i] + 1)
        document.getElementById("result") += numbers[i] + " ";
    }
    return result;
}
```

## Function arguments
Every functions has a collection of all the arguments sent to that function when it was called. Since the person calling the function can send as much arguments as he wants, it's important to know how to check how many arguments were passed before continuing with your execution. 
```javascript
function longestString() {
	console.log(arguments[0]) // first argument
	console.log(arguments[1]) // second argument
	console.log(arguments[2]) // third argument
	let longest = '';
	for (let i=0; i < arguments.length; i++) {
		if (arguments[i].length > longest.length) {
			longest = arguments[i];
		}
	}
	return longest;
}
```

## Recursion
Functions can call other functions inside of them. But functions can also call them selves inside of their block of code. And because the function is calling it self and it self contains another call to the same function we can easily tell that recursion can have some unwanted effects right away. That is why when we are doing recursion ( calling the same function inside of it self ) we always make a condition, so at some point our function can stop calling it self. 
```javascript
// With function ( standard )
function sumTo(num) {
    if(num === 0) {
        return 0
    }
    return num + sumTo(num - 1)
}

// With an arrow function ( shorter )
let sumTo = num => num === 0 ? 0 : num + sumTo(--num)
```

## What is strict typing in JavaScript?
Javascript lets us do all sorts of magic things. But some might say it is too flexible of a language. For this reason, for securing our code from our selves and our mistakes as developers, something that is called **strict** typing exists. We tell at the start of our script or at the start of a function **'use strict';**. With this some extra rules are applied on your javascript code. Some of those are:
* Not allowing to pass value to an undeclared variable
* Not allowing to delete variables, functions or objects
* Not allowing declaring two parameters of a function with the same name
* Some extra names are not allowed to be used as variables ( are reserved for the language it self )

```javascript
'use strict';
// These lines of code will throw an error if we use strict
number = 15; // no declaration
delete number; // cant delete stuff
function sum(num1, num1){ return num1 + num1 }; // same parameter names
let eval = 5; // cant use keyword eval
let arguments = 2; // cant use ketworkd arguments
```


## Higher order functions
Higher order functions are just functions that take other functions as arguments. With these functions we can make our code more readable and more organised. We can combine higher order functions to get results that would otherwise cost us 10+ lines of code, to be written and compacted in to only one or two. 

#### forEach
forEach is a function that accepts a function as an argument and it runs it for every element in an array. This function does not return anything. It just runs a code for every element without any resul in return. 
```javascript
// Without higher order function
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].firstName} ${students[i].lastName}`);
}
  
// With higher order function using a function
function logFullNames(student){
	console.log(`${student.firstName} ${student.lastName}`);
}
students.forEach(logFullNames);

// With higher order function using annonimous function
students.forEach(function(student){ console.log(`${student.firstName} ${student.lastName}`)});

// With higher order function using arrow function
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
```

#### filter
Filter is a higher order function that accepts a function as an argument. That function has an expression that tests every value from the collection and returns a new collection with values that are true for the expression or statement in the argument function. 
```javascript
// Without higher order function
let above18 = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 18) {
        above18.push(students[i]);
    }
  }
  
// With higher order function using a function
function above18check(student){
	return student.age >= 18; 
}
let above18 = students.filter(above18check);

// With higher order function using annonimous function
let above18 = students.filter(function(student){ return student.age >= 18});

// With higher order function using arrow function
let above18 = students.filter(student => student.age >= 18);
```

#### map
Map is a higher order function that accepts a function as an argument as well. But this function will execute a code on every item of a collection and then return it. This means that we can modify or use every item in an array in a particular way with only one line of code. 
```javascript
// Without higher order function
let fiveGradeStudentsNames = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].averageGrade === 5) {
        fiveGradeStudentsNames.push(`${students[i].firstName} ${students[i].lastName}`); 
    }
  }
  
// With higher order function using a function
function fiveGradeCheck(student){
	return student.averageGrade === 5; 
}
function fullName(student){
	return `${student.firstName} ${student.lastName}`;
}
let fiveGradeStudentsNames = students
.filter(fiveGradeCheck)
.map(fullName);

// With higher order function using annonimous function
let fiveGradeStudentsNames = students
.filter(function(student){ 
	return student.averageGrade === 5
})
.map(function(student){return `${student.firstName} ${student.lastName}`;});

// With higher order function using arrow function
let fiveGradeStudentsNames = students
.filter(student => student.averageGrade === 5)
.map(student => `${student.firstName} ${student.lastName}`);
```

#### reduce
Reduce is a function that accepts a function with two parameters as an argument and a starting value. This function aggregates multiple values from a collection in to one place. It does this with the function passed in with two parameters. The first parameter is always an aggregate variable. This means that in that all calculations and results will be combined there. And after that you have the second parameter which is changed after every cycle and represents a value from the collection. 
```javascript
// Without higher order function
let allGradesExeptLowest = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].averageGrade > 1) {
        allGradesExeptLowest += students[i].averageGrade;
    }
  }
// With higher order function using a function
function lowestGradeCheck(student){
	return student.averageGrade > 1; 
}
function getGrades(student){
	return student.averageGrade;
}
function agregateGrades(sum, grade){
	return sum += grade;
}
let allGradesExeptLowest = students
.filter(lowestGradeCheck)
.map(getGrades)
.reduce(agregateGrades, 0);

// With higher order function using annonimous function
let allGradesExeptLowest = students
.filter(function(student){ return student.averageGrade > 1})
.map(function(student){ return student.averageGrade })
.reduce(function(sum, grade){ return sum += grade }, 0);

// With higher order function using arrow function
let allGradesExeptLowest = students
.filter(student => student.averageGrade > 1)
.map((student) => student.averageGrade)
.reduce((sum, grade) => sum += grade, 0);
```

#### sort
Sort is a function that always returns an array of the same items, and of the same length but the items are sorted by some criteria. This function is different from the previous ones because not only does it return a result array, it laso changes the original array. So if we want to keep the original order of our array we have to create a new variable with the copy of the original variable and sort that, so that our original array can stay the same. The sorting is done through a simple system. We send a callback that takes two parameters. The two parameters are tested in some expression. If the expression returns less than 0, the first item is sent to a lower index than the second. If the expression returns more than 0 than the second is put to a lower index than the first. If the result is 0 then nothing happens.
```javascript
// Without higher order function
function sortFunc(arr){
    for(let i =0;i<arr.length;i++){
        for(let j= i+1;j<arr.length;j++){
            if(arr[i].grade<arr[j].grade){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
return arr;
}

let sorted = sortFunc(students);

// With higher order function using a function
function sortGradesDesc(student1, student2){
	return student2.grade - student1.grade; // descending
}
function sortGradesAsc(student1, student2){
	return student1.grade - student2.grade; // ascending
}
studentss.sort(sortGradesDesc);

// With higher order function using annonimous function
studentss.sort(function(student1, student2){
	return student2.grade - student1.grade; // Descending
});
studentss.sort(function(student1, student2){
	return student1.grade - student2.grade; // Ascending
});

// With higher order function using arrow function
studentss.sort((student1, student2) =>student2.grade - student1.grade); // Descending
studentss.sort((student1, student2) =>student1.grade - student2.grade); // Ascending

// Keeping the original array
let sortedStudents = [...students];
sortedStudents.sort((student1, student2) =>student2.grade - student1.grade); // Descending
sortedStudents.sort((student1, student2) =>student1.grade - student2.grade); // Ascending
```

#### Copy of an original array?
By just writing let newStudents = students; we do not make a copy of the students array in the newStudents. We just pass a refference to the students array. This means that the two variables point to the same place in memory. When methods like sort, change this array it changes in the memory, and with that in our both variables. 
```javascript
let sortedStudents = students;
sortedStudents.sort((student1, student2) =>student2.grade - student1.grade);

console.log(sortedStudents); // Sorted 
console.log(students); // Also sorted? :(
```

#### Solution
```javascript
// We create a new array [] and inside the brackets with spread, we add all elements from the students array
let sortedStudents = [...students];
sortedStudents.sort((student1, student2) =>student2.grade - student1.grade);

console.log(sortedStudents); // Sorted 
console.log(students); // Original order
```

![Pass by refference ](https://github.com/Drakso/AJS2019/blob/master/Class3/img/passbyrefference.gif?raw=true)


## Extra materials &#x1F4D9;
[Filter Map Reduce ](https://scotch.io/tutorials/list-processing-with-map-filter-and-reduce)

[Recursion in JS](https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f)

[Pure functions and how to write them](https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3)