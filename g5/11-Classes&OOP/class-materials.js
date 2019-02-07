//Very basic syntax
class ClassName
{
/* ... */
}

//Constructor

const Dog = function(name, breed){

	this.name = name;

	this.breed = breed;
	
	this.getDogName();
};

Dog.prototype.getDogName = function(){
	return this.name;
}

class Dog
{
	//constructor(){}
	
	constructor(name, breed)
	{
		this.name = name;
		this.breed = breed;
		this.getDogName();
	}
	
	getDogName(){
		return this.name;
	}
	
	setDogName(newName)
	{
		this.name = newName;
		return true;
	}
}



let dog1 = new Dog('Jonny', 'Corgie');

dog1.setDogName('Tobi');

//Encapsulate

const Dog = (name, breed, sound) => {

  const bark = () => console.log(sound);

  return {

    name, breed, bark

  };

}


class User
{
	constructor()
	{
		this.name = "username";
		this.lastname = "userlastname";
		this.email = "user@email.com";
	}
}


//Composition
const dog = {

  name : 'Fido',
  breed : 'Collie',
  collar : {
    color : 'red',
    shape : 'pendant'
  },
  tail : {
    length : {
      value : 10,
      unit : 'cm'
    },
    status : 'wagging'
  }
};

//Constructor functions

const Collar = ({shape='pendant', color='blue'}) => {

  return {
    shape,
    color
  };

};

const Length = ({value=0, unit='cm'}) => {

  return {
    value,
    unit
  };

};


const Tail = ({tailLength, status}) => {

  const length = Length({value : tailLength});

  return {
    length,
    status
  };

};


const Dog = (name, breed, sound) => {

  const bark = () => console.log(sound);

  const tail = Tail({

    tailLength : 10,

    status : 'wagging'

  });

  const collar = Collar({color : 'red'});

  return {

    name, breed, bark, tail, collar

  };

};


const dog = Dog('Fido', 'Collie', 'Grrrr');

class Length
{
	constructor(value, unit)
	{
		this.value = value || 0;
		this.unit = unit || 'cm';
	}
}

class Tail
{
	constructor(length, status)
	{
		this.length = new Length(length);
		this.status = status;
	}
}

class Collar
{
	constructor(color, shape)
	{
		this.color = color || 'blue';
		this.shape = shape || 'pendant';
	}
}

class Dog
{
	constructor(name, breed, sound)
	{
		this.name = name;
		this.breed = breed;
		this.bark = console.log(sound);
		
		this.tail = new Tail(10, 'wagging');
		this.collar = new Collar(color);
	}
	
	setNewLength(amount)
	{
		this.tail = new Tail(amount);
	}
}


let dog2 = new Dog('Fido', 'Collie', 'Grrrr');

//dog2.tail.length = 144;

dog2.setNewLength(144);


//Polymorphism

const Animal = function(sound){

  this.sound = sound;

};


Animal.prototype.makeSound = function(){

  console.log(this.sound);

};


const Dog = function(name, breed){

  this.name = name;

  this.breed = breed;

}


Dog.prototype = new Animal('woof');


const Cat = function(name, breed){

  this.name = name;

  this.breed = breed;

};


Cat.prototype = new Animal('meow');


const dog = new Dog('Fido', 'Collie');

const cat = new Cat('Oliver', 'Siamese');


dog.makeSound();

cat.makeSound();

//ES6 getter and setter
class GeoObjects
{
	constructor(type){
		this.type = type;
	}
	
	drawShape()
	{
		if(this.type == 'Rectangle')
		{
			console.log('rect');
		}
	}
}

class Rectangle extends GeoObjects{

  constructor(height, width) {
	super('Rectangle'); //Executes the constructor of parent class
    this.height = height;
    this.width = width;
  }

  // Getter
  get area() {
  	return this.calcArea();
  }
  
  set newHeight(value)
  {
  	this.height = value;
  }

  // Method
  calcArea()
  {
    return this.height * this.width;
  }
  
  
  //Static properties
  static calculateArea(x, y)
  {	//Has own this, no access to class properties
  	return x * y;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
square.newHeight = 22;


let area = Rectangle.calculateArea(10, 10);

function doSomethingWithArea(area)
{
	/*...*/
}

doSomethingWithArea(new Rectangle(10, 10));


//Private

class Rectangle {

  #height = 0;

  #width; //in  TypeScript is private width;
  //Use babel for this code

  constructor(height, width) {

    this.#height = height;

    this.#width = width;
	
	this.#_varname = 1;
  }
	
	get h()
	{
		return this.#height;
	}
	
	getHeight()
	{
		return this.#height;
	}
}

let rect1 = new Rectangle(10, 10);
rect1.height //this isn't working
rect1.h //this is working


