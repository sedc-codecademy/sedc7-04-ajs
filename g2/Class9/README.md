# Objects pt2 &#x1F34E;
## Object methods
The main constructor function from which every object inherits in JavaScript is the **Object**. This entity is not only used as a template for building new objects, but it can also serve other functions. On this entity there are methods attached that help us do some tasks on our objects. 

### Manipulating with the object structure
When building an object, we create properties and methods for that particular object. All the properties and methods create the structure of our object. This structure can be used for manipulating other objects, either by duplicating it or merging object structures together.
#### create
Create is a method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument. 
```javascript
let dog = {
    isHappy: true,
    bark: function(){
        console.log("BARK BARK BARK!")
    }
}

let barnie = Object.create(dog); // barnie has everything dog has
barnie.name = "Barnie";
barnie.color = "White";
barnie.age = 2;
barnie.happyBirthday = function(){
    console.log("Happy birthday Barnie!");
    this.age++;
}

let barnieTwinBrother = Object.create(barnie); // the twin has everything barnie has
barnieTwinBrother.name = "Booch"; // This name is added on the twin
```
#### assign
Assign is a method that can merge two objects in to one. It accepts two objects and it tries to merge the second object in to the first one.
```javascript
let addressInfo = {
    street: "Dogge Street",
    streetNumber: 24,
    contactPerson: "0703452323"
}

let barnieChip = Object.assign(barnie, addressInfo); // copies from address to barnie

let anotherAddress = {
    street: "Other Street",
    streetNumber: 12,
    contactPerson: "072990002"
}

let barnieChipUpdate = Object.assign(barnieChip, anotherAddress); // overrides address values
let barnieChipUpdateReversed = Object.assign(anotherAddress, barnieChip); // we have barnie without the changed address
```
### Reading entities inside an object
Entities inside of the object such as properties and method names and their values can be accessed. We can get them as collections with different methods of the Object.
#### keys
The keys method returns all the property and method names of our object in an array.
```javascript
console.log(Object.keys(barnie));
let dog = {
    name: "Sparky",
    age: 1,
    bark: function(){
        console.log("BARK BARK BARK");
    },
    printProperties: function(){
        Object.keys(this).forEach(key => console.log(key));
    }
}
```
#### values
The values method returns all values from our properties and methods ( the whole functions ) in an array.
```javascript
console.log(Object.values(barnie));
dog.printValues: function(){
    Object.values(this).forEach(key => console.log(key));
}
```
#### entries
The entries method is actually a combination of both the keys and values methods. It returns an array of arrays that have a key and value pair. Basically it returns the keys and the values in smaller arrays of 2 elements. The first element is always the key and the second always the value.
```javascript
console.log(Object.entries(barnie))
dog.printOnlyProperties = function(){
    Object.entries(barnie).forEach(pair => typeof(pair[1]) === "function" ? "" : console.log(pair));
}
```
#### dynamically create properties and values
There is no method for dynamically creating properties. We can't make a variable and add it next to the object as property name. The object instead of taking the value of the variable and setting it as a name, it will take the name of the variable as it's property name. Dynamically adding properties is done through the **[ ]** brackets. 
```javascript
let newDog = {};
let nameProperty = "dogName";
newDog[nameProperty] = "Sniffy"; // will have dogName: Sniffy property

let food = ["bacon", "cucumber"];
food.forEach(food => newDog[food] = true);
console.log(newDog); // will have dogName, bacon and cucumber properties
```

### Manipulating the reading and writing accessibility of entities 
Objects in JavaScript can be very flexible. This can be a very good thing, but it can also make us regret having this freedom. That is why there are Object methods that give us the power to change the accessibility of our entities. 
#### freeze
The freeze method allows us to completely lock our object. This means that adding new properties or methods is not available ( it will not throw an error but it will not do any changes to the object it self ). It also means that we can't change the values of our properties and methods that already exist in our object.  
```javascript
Object.freeze(barnie);
barnie.friend = "Sparky";
console.log(barnie.friend); // barnie stays the same
barnie.name = "Bob";
console.log(barnie.name); // barnie.name is still barnie
console.log(Object.isFrozen(barnie)); // true
```
#### seal
The seal method allows us to lock the structure of our object. This means that we can't add new properties or methods, but we can change the existing ones. ( again, adding new properties will not throw an error, but it will not change the object it self )
```javascript
Object.seal(dog);
dog.friend = "Barnie";
console.log(dog.friend); // dog is still the same
dog.name = "Bill";
console.log(dog.name); // the name is changed to Bill
console.log(Object.isSealed(dog)); // true

console.log(Object.isSealed(barnie)); // true
console.log(Object.isFrozen(dog)); // false
```

## Extra materials &#x1F4D9;
[object methods](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)