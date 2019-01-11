# Functions pt1
## What are functions
Functions are named blocks of code that we can store in memory for later use. We always try and use functions and wrap pieces of logic in functions as much as we can. This is a good practice because functions make our code:
* More organized
* More readable
* Reusable ( We can use one piece of code multiple times)
* Scalable ( We can build upon it easy )

Functions have two phases. The declaration phase ( when we write the function ) and the execution phase ( when we call the function ). 
#### Function declaration
When we write a function that is the moment where we declare it. When we declare a function we tell JavaScript that we have a block of code that we named and that it is ready to be executed when somebody calls it. Keep in mind that when we declare a function we just write it in memory. **THE CODE IS NOT EXECUTED**.
``` javascript
// Declaration of a function
function getFullName(firstName, lastName){
    return result = `${firstName} ${lastName}`;
}
```
#### Parameters
Everything that a function needs should be passed( given ) to the function. We do that with parameters. Parameters are point of entry of the function. They are variables that are acting like placeholders for values that we anticipate the caller to enter when calling the function. The parameters in the function above are firstName and lastName. When the person calls the function they will enter first name in the first position and last name in the second position. That is how javascript know which one is which, by the positions. Those names will then be replaced by the firstName and lastName placeholders in the whole function. If we call the function with more values than parameters the extra will be ignored. If we call a function with less values than parameters the ones that don't have a value will be undefined.
#### Return
Return is a keyword that means two things:
* End of the execution of the function
* Giving back a value to the outside world ( the place that it was called )

The return keyword is the single point of output of the function. If we want to get something from the function we must put that thing in return. Any value that is not in the return will be inaccessible to the outside world. Because it returns something outside of the function it means it is done with executing and that anything after the return keyword will not execute. If we write 10 lines of code after the return, they will never be executed.
#### Function execution
When we declare a function, none of the code is executed. If we want to execute the code we have to call the function. When we call a function on a certain line, the code execution goes to the line where the function is declared, it runs the code there and then gets back to the line in which it was executed with a result from the function. In simple terms when we call a function it will run all the code and give us a result that will be added in the same spot where we called the function. That means that if we call a function in a variable the function will first execute and whatever it returned will be stored in the variable. ( the whole function will not be stored in the variable after calling it ). 
##### Calling of a function ( the result will not be used, nothing will happen )
``` javascript
getFullName("Eric", "Praline"); 
```
##### Calling of a function in variable initialization
``` javascript
// The function will execute and the result then will be stored in the variable
let fullName = getFullName("Eric", "Praline"); 
```
##### Calling a function inside if statement ( if the full name is longer than 20 letters )
``` javascript
if(getFullName("Eric", "Praline The Third").length >= 20){
    console.log("That's a long name!");
}
```
##### Calling a function inside another function
``` javascript
function printPersonDetails(firstName, lastName, age, address){
    return `The person ${getFullName(firstName, lastName)} age ${age} lives on ${address}!`;
}
```
##### `How not to call function inside a function`
``` javascript
// This will not work because you are declaring a function inside this function, not calling it.
function printPersonDetails(firstName, lastName, age, address){
    let fullName;
    function getFullName(firstName, lastName){
        fullName = `${firstName} ${lastName}`;
    }
    return `The person ${fullName} age ${age} lives on ${address}!`;
}
```
#### Parameters vs Arguments
Parameters and Arguments are two different terms in programming. Like we said parameters are the variables which we anticipate values in a function ( Placeholders for the caller values ). The variables ( placeholders ) them selves are called parameters. But the values that the caller passes are actually called a different name. They are called arguments. So the variables that wait for a value are called parameters and the values given later are called arguments.
```javascript
// num1 and num2 are parameters
function sum(num1,num2){
    return num1 + num2;
}
// 2 and 3 are arguments
console.log(sum(2,3));
```
