
# Exercises
## Exercise 1
Make these functions pure:
```html
<input id="number1">
<input id="number2">
<button id="calculate"> calc </button>
<h1 id="result"></h1>
```
#### Task 1

```javascript
result = 0;
function sum(){
	let num1 = document.getElementById("number1").value;
	let num2 = document.getElementById("number2").value;
	return num1 + num2
}

function subtract(num1, num2){
	document.getElementById("result").innerText = num1 - num2;
}

function multiply(num1, num2){
	result = num1 * num2;
	return result;
}
function checkZero(num1){
	if(num1 === 0){
		document.getElementById("result").innerText = "Can't divide by zero";
		return false;
	}
	return true;
}
function divide(num1, num2){
	if(checkZero(num2)){
		result = num1 + num2;
		return result;
	}
}
```

## Exercise 2
There is a JSON file with students. Make a call to the file and get the following data from it: 
* All students with an average grade higher than 3
* All female student names with an average grade of 5
* All male student full names who live in Skopje and are over 18 years old
* The average grades of all female students over the age  of 24
* All male students with a name starting with B and average grade over 2

Use higher order functions to find the answers
**Link:** https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json

