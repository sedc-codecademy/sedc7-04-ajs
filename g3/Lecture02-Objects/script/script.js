let color = ["red", "yellow", "brown", "green"];

// console.log(color[1]);


// Key    Value
//0         red
//1         yellow
//2         brown
//3         green

let destinationCity = "Skopje";
let destinationCountery = "Macedonia";

let booking = {
    nameOfDestination: "",
    period: 4,
    startDate: "14/1/2019",
    endDate: "18/1/2019"
};

let destination = {
    city: 'Bouenos Aries',
    country: 'Argentina',
    distance: 14000,
    available: true,
    period: {
        startDate: '1/4/2019',
        endDate: '30/09/2019'
    },
    preview: function () {
        return `Name of the city: ${this.city} and country ${this.country}`;
    }
};

// let destination1 = {
//     city: 'Skopje',
//     country: 'Macedonia',
//     distance: 0,
//     available: false
// };

// let destinations = [];
// destinations.push(destination);
// destinations.push(destination1);
// console.log(destinations);


//Print whole object
console.log(destination);

//Print key
//Best practise
console.log("Destination distance -> ", destination.distance);
//Best practise

console.log("destination['city']", destination['city']);
console.log(destination.preview());
console.log(destination['preview']());

console.log(destination.period.startDate);
console.log(destination['period'].startDate);
console.log(destination['period']['startDate']);
console.log(destination.period['startDate']);

// let propForUpdate = 'city';
// destination[propForUpdate] = "Veles";
// let propForUpdate = 'city';
// destination[propForUpdate] = "Veles";

//Best practise
let destination2 = {
    name: "Test",
    isBooll: true
};
//Best practise


let destination3 = {
    "name": "Tesdasdas",
    "isBool": "sdasdas"
};

let destination4 = {
    'name': 'dasdsadas',
    'isBool': true
};

let test = {
    "1235#3423": "dasdasda",
    "yes or no": "da",
    "!sdas4533": "da"
};



let person = {};
console.log(person);
person.name = "Viktor";
person.lastName = "Dimitrievski";
person.getFullName = function () {
    return `${this.name} ${this.lastName}`;
}

console.log(person.getFullName());





function Hero(name) {
    this.name = name;
    this.occuptation = "Ninja";
    this.whoWeAre = function () {
        return `${this.name}`;
    }
}

function heroWithReturn(name) {
    return {
        name: name,
        occuptation: "Ninja",
        whoWeAre: function () {
            return `${this.name}`;
        }
    };
}
// name last name age cityofBorn birthYear

let hero = new Hero("Mikelanzelo");
console.log(hero);
console.log(hero.whoWeAre());
let hero2 = new Hero("Donatelo");
delete hero2.name;
console.log(hero2);

var abv = "abv";

var hero3 = heroWithReturn("Rafaelo");

// var hero4 = Hero("Rafaleo"); if we dont use new we have props in window.name

var hero5 = new Hero("Yoki");

let hero6 = new hero5.constructor("Roki");
console.log(hero6.name);


let orginal = { homeworks: 5 };
let copyOfOrginal = orginal;

copyOfOrginal.homeworks = 6;

let orginalV1 = { people: 3 };
var copyOfCopy = function (o) {
    o.people = 0;
};
copyOfCopy(orginalV1);
console.log("orginalV1", orginalV1.people);

var dog = { name: "Dog",type:"HomeDog" };
var cat = { type: "HomeCat" };
dog
var pets = { ...dog, ...cat };
var pets1 ={};
Object.assign(pets1,dog,cat);

var pets2 = Object.assign({},dog,cat);



function name(params) {
    return {
        name: "dadasda",
        myFun: function(){
            return "name";
        }
    };
}

var dasd = name();

dasd.name
dasd["name"]
dasd.myFun();
dasd['myFun']();
dasd.name = "Frosina";

let dasda= {};


// console.log("booking before edit", booking);
// booking.nameOfDestination = 'Bitola';
// console.log("booking after edit", booking);