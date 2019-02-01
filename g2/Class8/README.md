# Objects pt1 &#x1F34E;
## What are objects
We program using code. But we solve business problems and build solutions as humans with our own logic. In order to translate these solutions and problems in code more clear and organised we use lot of different mechanics. We put values in variables, executable actions in functions and multiple values in arrays. In order to translate more complex entities such as users or products we use objects. Objects are used to encapsulate and organize entities from our business logic, group different features as modules and even used as modules for organizing functions and values. Objects can hold two types of data:
* Properties - Simple or complex values ( ex: string, number, array, another object )
* Methods - Functions
### Everything is an object
In JavaScript everything is an object. All the functions and values that are native to JavaScript are one way or another object or connected to some object. If we look at the DOM or **document** we can see that it's not some special type of entity. It's actually an object. All methods like **getElementById** and **querySelector** are actually methods of the object document. We also know the **window**, the representation of our browser window. From that object we access all sorts of features such as **console** which is an object as well and has a method called **log**. Every **array** is actually an object, **length** is a property of that array object and **push** and **pop** are methods. 
```javascript
typeof(document) // object
typeof(document.getElementById) // function 
typeof([]) // object
typeof([].push) // function 
typeof(console) // object
typeof(console.log) // function 
typeof(window) // object
```
Since everything comes from the window object, the window object is left out and we don't have to write it. But make no mistake, all the functions and objects that we use in our script such as alert, prompt, document, console etc. are properties and methods of the window object. 
```javascript
console.log("hey"); // hey
window.console.log("hey"); // hey

console.log(document); // [document]
console.log(window.document); // [document]

alert("hey"); // hey
window.alert("hey"); // hey
```
Our functions and variables declared with var are also inside of the window.
```javascript
function sayHello(name){
	console.log(`Hey there ${name}!`);
}
sayHello("Bob"); // Hey there Bob!
window.sayHello("Bob"); // Hey there Bob!
var something = "a thing!";
console.log(something); // a thing!
console.log(window.something); // a thing!
```

### Creating objects
If we want to create an object we can do that in two ways:
* Object literal
* Constructor notation

#### Object literal
Object literal is just placing **{ }** and inside we write our properties and methods. We write properties and methods by writing the name of the property or method, write **:** and then write the value or method that you want. It's simple.
```javascript
let dog = {
	name: "Sparky",
	color: "Brown",
	age: 1,
	favoriteFood: ["Carrot", "Watermellon", "Bacon"],
	bark: function(){
		console.log("BARK BARK BARK");
	},
	eat: function(food){
		this.favoriteFood.forEach(fav => 
		fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
	}
}
```
#### Constructor notation
Constructor notation is a process of creating an object through the main object entity from JavaScript. Between this and object literal there is not much of a difference. They both do the same thing. There are very rare instances where we would need constructor notation over object literal.
```javascript
let dog = new Object();
dog.name = "Sparky";
dog.color = "Brown";
dog.age = 1;
dog.favoriteFood = ["Carrot", "Watermellon", "Bacon"];
dog.bark = function(){
		console.log("BARK BARK BARK");
	};
dog.eat = function(food){
		dog.favoriteFood.forEach(fav => 
		fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
		}
```
### Using and changing objects
Objects can be used and change in a very simple way. To get a property value or call a method, next to the object name we write **.** and then write the name of the property or the name of the function that we want to call. The same goes for changing them. We just write the name of the object, write **.** next to it and then write the name of the property and override it with the **=** sign and a new value.
```javascript
console.log(dog.name); // Sparky
dog.name = "Scooby";
console.log(dog.name); // Scooby
dog.bark() // BARK BARK BARK
dog.bark = function(){
	console.log("AF AF AF");
}
dog.bark() // AF AF AF
```

## Constructor Notation Templates
Constructor notation even tho not used as much for creating new plain objects, it definitely has it's uses for creating templates that we can use to create objects of the same type. This is useful when we have multiple objects with the same properties and methods. We don't want to create objects over and over again with the same properties and methods, so we create one template with constructor notation that will be a guideline for all other objects created from it. For example if we need to manipulate with multiple dog objects, we create a template for a dog. We use that template then to create as much dogs as we need without creating the objects with the properties and methods all over again. Templates similar as these are called classes in other languages. As a convention, templates are named with an uppercase first letter, so we can distinguish which one is a template and which one is an object. 
```javascript
function Dog(name, color, age, favoriteFood){
	this.name = name === undefined ? "unnamed" : name; // in case tehre is no name
	this.color = color;
	this.age = age;
	this.hasOwner = false; // default value for all
	this.favoriteFood = favoriteFood;
	this.bark = function(){
		console.log("BARK BARK BARK");
		};
	this.eat = function(food){
		dog.favoriteFood.forEach(fav => 
		fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
		}
}

let sparky = new Dog("Sparky", "Brown", 1, ["Chicken", "Cucumber"]);
let doggy = new Dog(); // will have name unnamed
```

### this keyword
The this keyword is nothing more than a pointer to the current object. It's a short pointer to the thing that you are working with at the moment. In different situations, this points to different object depending on where we execute the code. For instance:
#### this in the global scope
If we write this in the global scope we will get the window object
```javascript
console.log(this);
```
#### this in a function
If we write this in a function and call the function in our script we would also get the window object. That is because that function is still in the same execution context
```javascript
function whatIsThis(){
  console.log(this);
}
```
#### this in an object
If we create an object in our script and give it a property with the value **this**, we can see that this is still the window object. We are still in the same execution context.
```javascript
let thisObj = {
	whatsThis: this
}
console.log(thisObj.whatsThis);
```
#### this in a method
Now in methods, the execution context is changing. We are executing the function in the object. That's why in the method declared with function **this** will get the value of the current object from which it was called from. 
```javascript
let thisObj = {
	whatsThis: this,
	whatsThisMethod: function(){
		console.log(this);
	}
}
console.log(thisObj.whatsThis); // window
thisObj.whatsThisMethod(); // thisObj
```
#### this in a constructor template
When we are writing a constructor template, we are actually writing a function. When we want to create a new object from that function, we use the new keyword and from the parameters of the function we add some internal properties of the function ( remember, functions as first class citizens can have properties ). This means that if we just call a function in our script, **this** will still be the window object. But if we create a new instance then the **this** binds to the newly created object. 
```javascript
function thisTemplate(description){
	console.log(this);
	this.description = description;
	this.whatsThis = this;
	this.whatsThisFunc = function(){
		console.log(this)
	};
}
thisTemplate();
let whatsThisTemplate = new thisTemplate("we are testing this");
console.log(whatsThisTemplate.whatsThis);
whatsThisTemplate.whatsThisFunc();
```

## Extra materials &#x1F4D9;
[Introduction and using objects](https://codetheweb.blog/2018/06/09/javascript-objects/)

[What is THIS in javascript](https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7)