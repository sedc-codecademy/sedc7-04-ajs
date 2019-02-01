function Dog(name, color, age, favoriteFood){
    this.name = name === undefined 
    ? "unnamed" : name; // in case tehre is no name
	this.color = color;
	this.age = age;
	this.hasOwner = false; // default value for all
    this.favoriteFood = favoriteFood === undefined 
    ? [new Food("Bacon", "Red")] : favoriteFood;
	this.bark = function(){
		console.log("BARK BARK BARK");
		};
	this.eat = function(food){
		this.favoriteFood.forEach(fav => 
        fav.name.toLowerCase() === food.name.toLowerCase() 
        ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
		}
}

let sparky = new Dog("Sparky", "Brown", 1, [
    new Food("apple", "red"), 
    new Food("Beef", "Red")]);
let doggy = new Dog(); // will have name unnamed
// sparky.bark();
// doggy.bark();
// console.log(sparky);
// console.log(sparky.favoriteFood[0].name);
// console.log(doggy);
// console.log(doggy);
// sparky.eat(new Food("apple", "green"));
console.log(new Food("apple", "red") === new Food("apple", "red"))
function Food(name, color){
    this.name = name;
    this.color = color;
}