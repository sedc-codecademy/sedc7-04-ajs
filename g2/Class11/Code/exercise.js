class Animal{
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    set type(data){
        data = data.toLowerCase();
        if(data !== "carnivore" && data !== "omnivore" && data !== "herbivore"){
            throw new Error("There is no such type!");
        } else {
            this._type = data;
        }
    }
    eat(food){
        if(food instanceof Animal){
            if(food.type === "herbivore"){
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals!`);
                return;
            }
            if(this.size >= food.size * 2){
                food.isEaten = true;
                console.log(` The animal ${this.name} ate the ${food.name}!`);
                return;
            } else {
                console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large`)
            }
        }
        console.log(`The animal ${this.name} is eating ${food}`);
    }
}

class Lion extends Animal{
    constructor(name, age, size, isKing, huntingSkill){
        super(name, "carnivore", age, size);
        this.isKingOfTheJungle = isKing;
        this.huntingSkill = huntingSkill;
    }
    set huntingSkill(data){
        if(data < 0 || data > 10 || typeof(data) !== "number"){
            throw new Error("There is no such skill number!");
        } else {
            this._huntingSkill = data;
        }
    }
    hunt(){

    }
}

class Rabbit extends Animal{
    constructor(name, age, size, speed, size){
        super(name, "herbivore", age, size);
        this.speed = speed;
    }
    get size(){

    }
}
/**

## Create a Lion class that inherits from Animal and has:
* isKingOfTheJungle - boolean
* huntingSkill - must be from 1 to 10 ( validate on setting this property )
* hunt - a method that checks if the input is an Animal.
	* If the input is an Animal than randomly generate a number from 1 to 10. If the number is equal or less than the huntingSkill of this Lion than try and eat the animal with the eat method.
	* If the Lion is king of the jungle than automatically try and eat the animal no matter the huntingSkill
	* If the number is larger than the huntingSkill then write in the console: The Lion didn't catch it's prey
	* If the input is not an animal write in the console: The Lion can't hunt (the input)

**Note**: name and type of the lion should be added automatically without entering it from the constructor

## Create a Rabbit class that inherits from Animal and has:
* speed - must be from 1 to 10 ( validate on setting this property )
* size - custom get and set. ( set is normal, get returns the size value multiplied by the speed property. )

 */