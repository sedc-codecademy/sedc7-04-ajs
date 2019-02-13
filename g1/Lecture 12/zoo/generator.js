const getRandom = (from, to) => from + Math.floor(Math.random() * (to-from+1));

const toTitleCase = string => string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();

// const bunnies = Array(10).fill(0)
//     .map((_, index) => new Animal(`Bunny ${index+1}`, "bunny", getRandom(1, 5), getRandom(1, 5)));

// const wolves = Array(10).fill(0)
//     .map((_, index) => new Animal(`Wolf ${index+1}`, "wolf", getRandom(1, 15), getRandom(10, 40)));

// const elephants = Array(10).fill(0)
//     .map((_, index) => new Animal(`Elephant ${index+1}`, "elephant", getRandom(1, 90), getRandom(1000, 3000)));

// const pigs = Array(10).fill(0)
//     .map((_, index) => new Animal(`Pig ${index+1}`, "pig", getRandom(1, 20), getRandom(20, 50)));

const generateAnimals = ({ count, species, age, size}) => 
    Array(count).fill(0)
        .map((_, index) => new Animal(
            `${toTitleCase(species)} ${index+1}`, 
            species, 
            getRandom(age.min, age.max), 
            getRandom(size.min, size.max)
        )
    );

const configs = {
    bunny: {
        count: 10,
        species: "bunny",
        age: {
            min: 1,
            max: 5,
        },
        size: {
            min: 1,
            max: 5
        }
    },
    wolf: {
        count: 10,
        species: "wolf",
        age: {
            min: 1,
            max: 15,
        },
        size: {
            min: 10,
            max: 40
        }
    },
    elephant: {
        count: 10,
        species: "elephant",
        age: {
            min: 1,
            max: 90,
        },
        size: {
            min: 1000,
            max: 3000
        }
    },
    pig: {
        count: 10,
        species: "pig",
        age: {
            min: 1,
            max: 20,
        },
        size: {
            min: 20,
            max: 50
        }
    }
}

// const bunnies = generateAnimals(configs.bunny);

// const wolves = generateAnimals(configs.wolf);

// const elephants = generateAnimals(configs.elephant);

// const pigs = generateAnimals(configs.pig);

const zooAnimals = Object.keys(configs).map(key => generateAnimals(configs[key]));

const allAnimals = [];
for (const animalArray of zooAnimals) {
    for (const animal of animalArray) {
        allAnimals.push(animal);
    }
}


