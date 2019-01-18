
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
