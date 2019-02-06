// function Vehicle(id, name, batchNo, price){
// 	this.id = id;
// 	this.name = name;
// 	this.batchNo = batchNo;
// 	this.price = price;
// 	this.company = "move.inc";
// 	this.printVehicle = function(){
// 		console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`);
// 	}
// }

// let wheeledVehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));
// wheeledVehicle.drive = function(){console.log("WROOM!")}
// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;
// car.drive(); // WROOM!
// car.printVehicle(); // Prints vehicle
// console.log(car);

// let wheeledVehicle1 = new Vehicle(13, "stojadin", "44s", 400);
// let wheeledVehicle2 = {};
// wheeledVehicle2.__proto__ = new Vehicle(12, "Yugo", "25B", 500);
// console.log(wheeledVehicle1);
// console.log(wheeledVehicle);
// console.log(wheeledVehicle.name);
// wheeledVehicle.name = "Maruti";
// console.log(wheeledVehicle.name);
// console.log(wheeledVehicle.__proto__.name);

// function Vehicle(id, name, batchNo, price){
// 	this.id = id;
// 	this.name = name;
// 	this.batchNo = batchNo;
// 	this.price = price;
// 	this.company = "move.inc";
// 	this.printVehicle = function(){
// 		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
// 	}
// }
// function WheeledVehicle(wheels, name){
// 	this.wheels = wheels;
// 	this.name = name;
// 	this.drive = function(){
// 		console.log(`Driving on ${this.wheels} wheels!`);
// 	}
// }
// WheeledVehicle.prototype = Object.create(new Vehicle());
// let car = new WheeledVehicle(4, "Yugo");
// car.price = 500;
// car.id = 2;
// car.batchNo = "24a";
// car.printVehicle(); // prints Yugo
// console.log(car);

// WheeledVehicle.prototype.stop = function(){
// 	console.log(`The vehicle ${this.name} stopped.`);
// }
// car.stop(); // the car Yugo stopped.
// car.__proto__.stop();

function Vehicle(id, name, batchNo, price){
	this.id = id;
	this.name = name;
	this.batchNo = batchNo;
	this.price = price;
	this.company = "move.inc";
	this.printVehicle = function(){
		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
	}
}
function WheeledVehicle(id, batch, price, name, wheels){
	//this.__proto__= Object.create(new Vehicle(id, name, batch, price));
	Object.setPrototypeOf(this,new Vehicle(id, name, batch, price))
	this.wheels = wheels;
	this.drive = function(){
		console.log(`Driving on ${this.wheels} wheels!`);
	}
}

// let someWheeledVehicle = new WheeledVehicle(1, "b23", 9000, "bmw", 4);
// console.log(someWheeledVehicle);
// console.log(someWheeledVehicle.name);
// someWheeledVehicle.drive();
// someWheeledVehicle.printVehicle();

// 1. new WheeledVehicle
// 2. WheeledVehicle constructor function is called
// 3. setPrototypeOf a new Vehicle object is created
// 4. the values are passed to the new Vehicle() constructor function
// 5. Vehicle constructor function is called
// 6. Vehicle object is built from vehicle constructor function
// 7. The returned vehicle object is set as prototype to the current object that is created
// 8. The current object ( WheeledVehicle ) is created
// 9. WheeledVehicle object is returned from the new WheeledVehicle and stored in our variable

function Car(id, batch, price, name, doors, fuelCapacity){
	//this.__proto__= Object.create(new WheeledVehicle(id, batch, price, name, 4));
    // price = presmetka nekoja
    Object.setPrototypeOf(this, new WheeledVehicle(id, batch, price, name, 4))
	this.name = name;
	this.doors = doors;
	this.fuelCapacity= fuelCapacity;
	this.drift = function(){
		console.log(`The ${this.name} is drifting!`);
	}
}

let someCar = new Car(99, "b2", 200000, "Ferrari", 3, 100);
console.log(someCar);
someCar.printVehicle();
someCar.drive();
someCar.drift();