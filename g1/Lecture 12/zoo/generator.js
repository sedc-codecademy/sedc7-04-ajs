const getRandom = (from, to) => from + Math.floor(Math.random() * (to-from+1));

const bunnies = Array(10).fill(0)
    .map((_, index) => new Animal(`Bunny ${index+1}`, "bunny", getRandom(1, 5), getRandom(1, 5)));

const wolves = Array(10).fill(0)
    .map((_, index) => new Animal(`Wolf ${index+1}`, "wolf", getRandom(1, 15), getRandom(10, 40)));

const elephants = Array(10).fill(0)
    .map((_, index) => new Animal(`Elephant ${index+1}`, "elephant", getRandom(1, 90), getRandom(1000, 3000)));

const pigs = Array(10).fill(0)
    .map((_, index) => new Animal(`Pig ${index+1}`, "pig", getRandom(1, 20), getRandom(20, 50)));
