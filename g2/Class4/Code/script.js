// 'use strict';
// function longestString(num1) {
// 	console.log(arguments) // first argument
// 	//console.log(arguments[1]) // second argument
// 	// console.log(arguments[2]) // third argument
// 	let longest = '';
// 	for (let i=0; i < arguments.length; i++) {
// 		//console.log(i+1 + ": " + arguments[i])
// 		if (arguments[i].length > longest.length) {
// 			longest = arguments[i];
// 		}
// 	}
// 	return longest;
// }

// console.log("Result:" + longestString("Hello", "Yo", "Super", "Hello SEDC", "HelLo SEDC", 2, true, null));



// let input1 = document.getElementById("number1").value;
// let input2 = document.getElementById("number2").value;
// function sum(num1, num2){
// 	return num1 + num2
// }
// console.log(sum(input1,input2))

// function subtract(num1, num2){
// 	return num1 - num2;
// }
// document.getElementById("result")
// .innerText = subtract(input1, input2);

// function multiply(num1, num2){
// 	let result = num1 * num2;
// 	return result;
// }
// function checkZero(num1){
// 	if(num1 === 0){
// 		return false;
// 	}
// 	return true;
// }
// function divide(num1, num2){
// 	if(checkZero(num2)){
// 		result = num1 + num2;
// 		return result;
// 	} else {
// 		return "Can't divide by zero";
// 	}
// }
// document.getElementById("result")
// 		.innerText = divide(1, 5);


// var number;

// number = 15;
// console.log(number);

// function sum(num1, num2){ 
// 	console.log("first:"+arguments[0]);
// 	console.log("second:"+arguments[1]);
// 	return num1 + num1;
// };
// console.log(sum(5,3));
// arguments[0] = 5;
// var num1 = 5
// arguments[1] = 3;
// var num2 = 3

// var arguments = 2;
// console.log(arguments);
let students = [
	{firstName: "Bob", lastName: "H", grade: 5, age: 19},
	{firstName: "Mel", lastName: "B", grade: 2, age: 33},
	{firstName: "Jill", lastName: "M", grade: 3, age: 15},
	{firstName: "Lucky", lastName: "J", grade: 5, age: 18},
	{firstName: "Strike", lastName: "K", grade: 4, age: 16},
	{firstName: "Eric", lastName: "I", grade: 1, age: 17}
]
let students2 = [
	{firstName: "Bob", lastName: "H", grades: [
		{subject: "Math", grade: 2},
		{subject: "Science", grade: 3}
	], age: 19},
	{firstName: "Mel", lastName: "B", grades: [
		{subject: "Math", grade: 3},
		{subject: "Science", grade: 5}
	], age: 33}
]

// Without higher order function
// for (let i = 0; i < students.length; i++) {
// 	console.log(`
// 	${students[i].firstName} ${students[i].lastName}
// 	`);
// }
  
// With higher order function using a function
// function logFullNames(student){
// 	console.log(`
// 	${student.firstName} ${student.lastName}
// 	`);
// }
// students.forEach(logFullNames);

// // With higher order function using annonimous function
// students.forEach(function(student)
// { console.log(`
// ${student.firstName} ${student.lastName}
// `)});

// With higher order function using arrow function
// students2
// .forEach(student => 
// 	student.grades.filter(grade => 
// 		grade.grade === 5)
// 			.forEach(grade => 
// 				console.log(`${grade.subject}: ${grade.grade}`)));
// step 1: get all students
// step 2: for every student get their grades array
// step 3: filter the grades array so that only grade 5 will pass
// step 4: filter will return a result array with only grade 5 grades
// step 5: we will use forEach on the new result array with only 5
// step 6: forEach will print them in the console

// Without higher order function
// let above18 = [];
// for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 18) {
//         above18.push(students[i]);
//     }
//   }
  
// // With higher order function using a function
// function above18check(student){
// 	return student.age >= 18; 
// }
// let above18 = students.filter(above18check);

// // With higher order function using annonimous function
// let above18 = students.filter(function(student){ return student.age >= 18});

// With higher order function using arrow function
// let above18 = students
// .filter(student => student.age >= 18)
// .filter(student => student.grade > 4);

// console.log(above18);

// let names = students
// .map(student => {
// 	return {name: `${student.firstName} ${student.lastName}`
// 	, grade: student.grade}});
// console.log(names);

// let allGradesExeptLowest = students
// .filter(student => student.grade > 1)
// .map((student) => student.grade)
// .reduce((sum, grade) => sum *= grade, 0);
// console.log(allGradesExeptLowest);

// let allGradesExeptLowest = students
// .filter(student => student.grade > 1)
// .reduce((sum, student) => sum += student.grade, 0);
// console.log(allGradesExeptLowest);

let allGradesExeptLowest = students
.filter(student => 
	student.grade > 1)
		.reduce((names, student) => 
			names += student.firstName + " ", "Students:");
console.log(allGradesExeptLowest);