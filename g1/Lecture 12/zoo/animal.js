class Animal {
    constructor(/* parameters here */) {
        // initialization here
    }

    eat(food) {
        if (food instanceof Animal) {
            // we're eating an animal
        } else {
            // we're eating something else
        }
    }
}