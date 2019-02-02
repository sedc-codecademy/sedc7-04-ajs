# Objects in JavaScript 
## What are objects
We program using code. But we solve business problems and build solutions as humans with our own logic. In order to translate these solutions and problems in code more clear and organised we use lot of different mechanics. We put values in variables, executable actions in functions and multiple values in arrays. In order to translate more complex entities such as users or products we use objects. Objects are used to encapsulate and organize entities from our business logic, group different features as modules and even used as modules for organizing functions and values. Objects can hold two types of data:
* Properties - Simple or complex values ( ex: string, number, array, another object )
* Methods - Functions

As previously mentioned in JavaScript everything is an object. If we look at the DOM or **document** we can see that it's not some special type of entity. It's actually an object. All methods like **getElementById** and **querySelector** are actually methods of the object document. We also know the **window**, the representation of our browser window. From that object we access all sorts of features such as **console** which is an object as well and has a method called **log**. Every **array** is actually an object, **length** is a property of that array object and **push** and **pop** are methods. 
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

### Creating objects
If we want to create an object we can do that in three ways:
* Object literal
* Constructor notation
* Constructor function

### Object literal
In the code above we can see how we can create an object by using object literal
```javascript
    let person = {
        firstName: "Tom",
        lastName: "Hanks",
        age: 62,
        isActor: true,
        movies: ["Forrest Gump", "The Green Mile", "Captain Phillips"],
        getFullName: function (){
            return `${this.firstName} ${this.lastName}`;
        }
    }
```
### Constructor notation
The second way is creating an object by using the constructor notation, or we can also say by instantiating a new instance from the main **Object** in JavaScript, so the previous example, by using construcotr notation will look like the code above:
```javascript
let person = new Object();
person.firstName = "Tom";
person.lastName = "Hanks";
person.age = 62;
person.isActor = true;
person.movies = ["Forrest Gump", "The Green Mile", "Captain Phillips"];
person.getFullName = function() {
    return `${firstName} ${lastName}`;
}
```
### Constructor function
The third way of creating an object is by using constructor function. You can think of constructor function as of a blueprint of the object that we want to create. Depending of the situation we will have different needs when it comes to create an object, but this is the most independed way of declaring an object. We can create a constructor function that will serve us as a template for our object and after that we can instantiate as much instances as we need for our furher implementation logic. So again the previous two examples of creating an object will look like this:

```javascript
function Person(firstName, lastName, age, isActor, movies){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isActor = isActor;
    this.getFullName = function() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
let movies = ["Forrest Gump", "The Green Mile", "Captain Phillips"];
//On the next line we instantiate a new instances of our Person() constructor function 
//And by that we make a new instances of our object
let person1 = new Person("Tom", "Hanks", 62, movies);
let person2 = new Person("Tom", "Cruise", 56, ["Top Gun", "Edge of tomorrow", "Jack Reacher"]);

//We can also call the getFullName() method on each of the instances like:
person1.getFullName(); // This will return Tom Hanks
person2.getFullName(); //This will return Tom Cruise
```
We are free to instanciate as much instances as we want, and we got a general definition for the person object only on one place in our code, that is why it is independend way of declaring object, because every new instance can be a new person, with another name, lastName and other properties that our constructor function requires in order to instanciate the new object.
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
