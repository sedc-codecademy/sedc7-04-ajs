# Objects in JavaScript part 2 - Object destructuring

## What is Destructuring?
**Destructuring simply implies breaking down a complex structure into simpler parts**. In JavaScript, this complex structure is usually an **object** or an **array**. With the destructuring syntax, you can extract smaller fragments from arrays (items) and objects (properties). Destructuring syntax can be used for variable declaration or variable assignment. You can also handle nested structures by using nested destructuring syntax. So if we add a simple example for destructuring an object it will look something like this:
```javascript
    let dog = {
        dogName: "Bugsy",
        dogColor: "Black",
        dogAge: 4
    }
//If we want to console our dog's object proerties we can do this:
console.log(dog.dogName); //Bugsy
console.log(dog.dogColor); //Black
console.log(dog.dogAge); //4

//If we use destructuring on our object it will look like:
const {name, color, age} = dog;
console.log(name); //Bugsy
console.log(color); //Black
console.log(age); //4
```
So what is done in the previous example is that we declare an object and give to it three variables name, color and age, but we initialize it to our existing dog object, and since the **dog** object contains only three properties they will stored in **name, color and age** respectively.

## Why Destructuring?
To explain the why of destructuring, it's better to look at a scenario. In the code below, we have a simple student object that has properties **name, age** and has a nested object of **scores** in three subjects(Maths, Elementary Science, English). Imagine we need to display some information based on this data and for that purpose we declare a displlaySymmary function that accepts one input parameter that should be a student object. 

```javascript
    const student = {
    name: 'John Doe',
    age: 19,
    scores: {
        JavaScript: 74,
        AdvancedJS: 63,
        CSharp: 85
    }
};

// A function that just displays some info about the student object for us.
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your JavaScript score is ' + (student.scores.JavaScript || 0));
    console.log('Your AdvancedJS score is ' + (student.scores.AdvancedJS || 0));
    console.log('Your CSharp score is ' + (student.scores.CSharp || 0));
}

displaySummary(student);
//This will display the following:
// Hello, John Doe
// Your JavaScript score is 74
// Your AdvancedJS score is 63
// Your CSharp score is 85
```

So just for getting the scores and display it we should write **student.scores.JavaScript**, which is not much an issue, but what if there is a need to access some properties even more deep level of nesting? Of course, the chances of making a syntax error are very high, and probably somewhere you will enter **score** instead of **scores**. And again, if the scores object we are accessing is deeply nested in another object, the object access chain becomes longer which could mean more typing and making more error prone code. That's why destructuring is used, because with destructuring we can do the same in a more expressive and compact syntax.

Imagine the previous example but now, by using destructuring. Everythng is the same except for the function displaySummary()

```javascript
//By using destructuring
    function displaySummary({ name, scores: { JavaScript = 0, AdvancedJS = 0, CSharp = 0 } }) {
    console.log('Hello, ' + name);
    console.log('Your JavaScript score is ' + JavaScript);
    console.log('Your AdvancedJS score is ' + AdvancedJS);
    console.log('Your CSharp score is ' + CSharp);
}
displaySummary(student)
//Compared to the previous one, that does not use destructuring

function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your JavaScript score is ' + (student.scores.JavaScript || 0));
    console.log('Your AdvancedJS score is ' + (student.scores.AdvancedJS || 0));
    console.log('Your CSharp score is ' + (student.scores.CSharp || 0));
}
displaySummary(student)
```
From the comparison, we can see that the function declaration with destructuring is more clear, and simple.

## Default Values
Trying to assign a variable corresponding to a key that does not exist on the destructured object will cause the value **undefined** to be assigned instead. You can pass default values that will be assigned to such variables instead of undefined. Here is a simple example.

```javascript
let person = {
    name: 'John Doe',
    country: 'Canada'
};

// Assign default value of 25 to age if undefined
const { name, country, age = 25 } = person;

// Here I am using ES6 template literals
console.log(`I am ${name} from ${country} and I am ${age} years old.`);

// I am John Doe from Canada and I am 25 years old.'
```
## Array Destructuring
As for now we see how objects are destructed and why sometimes should we use object destructuring so that can make our code easier and clear. Except objects we can also destruct arrays and in the following lines and examples we can see how destcruct arrays is done.
In array destructuring, you use an array literal on the left-hand-side of an assignment expression. Each variable name on the array literal maps to the corresponding item at the same index on the destructured array. Here is an example.
```javascript
const rgb = [255, 200, 0];

// Array Destructuring
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0
```
 Also destructuring can be used to a nested arrays:
 ```javascript
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];

// Use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;

console.log(hex, red, green, blue); // #FF00FF 255 0 255
```

## Mixed Destructuring
Sometimes we have a pretty complex object/array structure and we need to assign some values from it to local variables.
This is known as mixed destructuring and if we want to destcruture our complex object/array structure we can use a combination of object destructuring and array destructuring to target certain parts of the complex structure as required like in the examble below.
 ```javascript
const person = {
    name: 'Bob Bobsky',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

// Observe how mix of object and array destructuring is being used here
// We are assigning 5 variables: name, country, city, lat, lng and assign them to our person object
const {name, location: {country, city, coordinates: [lat, lng]}} = person;

//Instead of getting the object's proerties like person.name..., we just use the variables from our destructuring of the person object
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//The output would be:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
```
## Extra materials &#x1F4D9;
[How To Use Object Destructuring in Modern Javascript](https://itnext.io/how-to-use-object-destructuring-in-modern-javascript-59758ebfb778)
