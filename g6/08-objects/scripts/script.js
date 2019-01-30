function Vegetable({ color, name, taste, price }) {
    this.color = color;
    this.name = name;
    this.taste = taste;
    this.price = price;
}

let carrot = new Vegetable({ color: 'orange', taste: 'very good', price: 10, name: 'Carrot', expireDate: 'long over due' })

console.log(carrot)

function Person({ name, lastName, age, sayFullName = sayName }) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sayFullName = sayFullName
}

let obj = {
    name: 'Igor',
    lastName: 'Mitkovski',
    nickname: 'Igeto',
    age: 30
}

function sayName() { return `${this.name} ${this.lastName}`}
obj.sayName = sayName
let me = new Person(obj)

// console.log(me)


function Character({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships }) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this. hair_color =  hair_color;
    this.skin_color =  skin_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld = homeworld;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
}


const getData = async urlsArr => {
    const data = []
    for(const url of urlsArr) {
        let obj = await fetch(url)
        obj = await obj.json()
        data.push(obj.title ? obj.title : obj.name)
    }
    return data
}

let myChar;
const getLuke = async url => {
    let luke = await fetch(url)
    luke = await luke.json()
    let planet = await fetch(luke.homeworld)
    planet = await planet.json()
    luke.homeworld = planet.name
    luke.films = await getData(luke.films)
    luke.species = await getData(luke.species)
    luke.vehicles = await getData(luke.vehicles)
    luke.starships = await getData(luke.starships)
    myChar = new Character(luke)
    console.log(myChar)
}

// getLuke('https://swapi.co/api/people/1/')