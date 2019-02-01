//Example A

var catA = {name: "Fluffy", color: "White", age: 0};

var catB = {name: "Fluffy", color: "White", age: 0};

catA === catB //false - typeof prototype of catA = catA prototype
					  //typeof prototype of catB = catB prototype
					  
					  
//Example B

var catB = Object.create(new Object());

catB.name = "Fluffy";

catB.color = "White";

catB.age = 0;


//Example C

function Cat(name, color) {

  this.name = name;

  this.color = color;

}

Cat.prototype.age = 0;


var catC = new Cat("Fluffy", "White");


//Inheritance and chain

function Mammal()
{
	this.bloodTemp = 'warm';
	//this.growHair  = function(){ console.log('my hair is growing')}
}

function Carnivore(){}

function Lion(name){

  Mammal.call(this);  //super. Inherit constructor

  this.name = name;
}

Mammal.prototype.growHair = function(){

   console.log('my hair is growing');
}

Carnivore.prototype = Object.create(Mammal.prototype);

Carnivore.prototype.eatMeat = function(){

  console.log('Mmm.Meat');
}

Lion.prototype = Object.create(Carnivore.prototype);

Lion.prototype.pride = function(){
	console.log('im king of the jungle');
};


var charlie = new Lion('charlie')

charlie.growHair() // my hair is growing

charlie.eatMeat()  // Mmm.Meat

charlie.pride()    //im king of the jungle

charlie.bloodTemp  // warm