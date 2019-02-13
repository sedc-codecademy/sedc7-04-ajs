class Animal {
    constructor(name, species, age, size) {
        this.name = name;
        this.species = species;
        this.type = this.getType(this.species);
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    getType(species) {
        const map = {
            "wolf": "carnivore",
            "bunny": "herbivore",
            "elephant": "herbivore",
            "pig": "omnivore"
        };

        return map[species];
    }

    eat(food) {
        if (food instanceof Animal) {
            // we're eating an animal
            if (this.type === "herbivore") {
                console.log(`The ${this.species} ${this.name} is a herbivore and does not eat other animals`);
                return;
            } 

            if (this.size * 2 < food.size) {
                console.log(`The ${this.species} ${this.name} tried to eat the ${food.species} ${food.name}, but it was too large`);
                return;
            }

            food.isEaten = true;
            console.log(`The ${this.species} ${this.name} ate the ${food.species} ${food.name}`);
            return;
        } 
        
        // we're eating something else
        
        console.log("SHOULD NOT COME HERE");
    }
}