const bunny = new Animal("Fluffy", "bunny",2, 5);
const bundo = new Animal("Marlon Bundo", "bunny", 1, 3);

bunny.eat(bundo);
console.log(bundo.isEaten);

// --------------

const vk = new Animal("Timber", "wolf", 5, 10);
vk.eat(bunny);
console.log(bunny.isEaten);

// -----------------
const dumbo = new Animal("Dumbo", "elephant", 80, 1234);
vk.eat(dumbo);
console.log(dumbo.isEaten);

// ------------
const babe = new Animal("Babe", "pig", 2, 15);
vk.eat(babe);
console.log(babe.isEaten);
