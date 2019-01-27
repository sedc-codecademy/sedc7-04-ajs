let obj1 = {
	"name": "Some NAme",
	"id" : 1
}

//obj1.name --- Some NAme
//obj1.id --- 1

//obj1["1"] - okay
//obj1.1 - not working


for(let i in obj1)
{
	console.log(i); // I - is the name of the key
	console.log(obj1[i]); // Value of the key
}

obj1.age = 30;
obj1.city = 'Skopje';


//Entities - mapped object

let person = {
	firstName: false,
	lastName: false,
	age: false,
	height: false
}


//always ASC

let codes = {

  "49": "Germany",

  "41": "Switzerland",

  "44": "Great Britain",

  "1": "USA"

};

//reSorted

let newCodes = {
	"0": {
		prefix: 49,
		country: "Germany"
	},
	"1": {
		prefix: 41,
		country: "Switzerland"
	},
	"2": {
		prefix: 4,
		country: "Russia"
	}
	
}

let k1 = Object.keys(newCodes); //[0,1,2]
let v1 = Object.values(newCodes[0]); // [49, 'Germany']

let prefixByCountry = {
	"USA": 1,
	"Germany": 49,
	"Switzerland": 41
}


for(let code in codes) {

  alert(code); // 1, 41, 44, 49

}

//Get keys and get values form Object

let keysArray = Object.keys(prefixByCountry); // ["Germany", "Switzerland", "USA"]
let valuesArray = Object.values(prefixByCountry); //["49", "41", "1"]

let newSwap = {}

for(let i = 0; i < valuesArray.length; i++)
{
	newSwap[valuesArray[i]] = keysArray[i];
}

//Clone - Copy of Objects
// Normal copy - same as copy

let object2 = {
	a: 5,
	b: 10
};

let object3 = object2;

// Deep clone - same look, different proto

let object4 = JSON.parse(JSON.stringify(object2));


//
JSON.stringify(object2) //=> '{"a":"5", "b":"10"}';

//
JSON.parse('{"a":"5", "b":"10"}');


//Function as values

let object5 = {
	
	step: 10,
	getStartPosition: function()
	{
		return 10;
	},
	setNewPosition: function(position)
	{
		this.step = position;
	}
}

//Use maps  with functions
let userMap = {
	id: null,
	setUserId: function(id)
	{
		this.id = id;
		return this.age;
	},
	getUserId: function()
	{
		return this.id;
	}
}

//personMap.setAge(userMap);

let personMap = {
	firstName: false,
	lastName: false,
	age: false,
	height: false,
	setAge: function(age)
	{
		this.age = age;
	},
	setHeight: function(height)
	{
		this.height = height;
	},
	setName: function(name)
	{
		this.firstName = name;
	},
	setLastname: function(name)
	{
		this.lastName = name;
	},
	callExternal: someExternalfunction
}

function someExternalfunction(n)
{
	
}

personMap.setAge(344);
personMap.setHeight(400);
personMap.setName('Peter');
personMap.setLastname('Highlander');

//personMap.callExternal(n);

let peter = JSON.parse(JSON.stringify(personMap));

personMap.setAge(455);
personMap.setHeight(500);
personMap.setName('Peter\'s grandFather');
personMap.setLastname('Highlander');

let peterGF = JSON.parse(JSON.stringify(personMap));

//Other way to define Object
let nObj = new Object(); //{}
//let o1 = {} !== let o2 = new Object();

let cObj = new Object(nObj); //{} - clone of nObj

//Create - copy object

//Create
let o6 = Object.create({}, {c: 10, d: 4}); //Object.create(object prototype, properties)
//let o6 = {};
//let 06 = {
//	c: 10,
//	d: 4
//}

//Assign
let o7 = Object.assign({}, {}); //Object.assign({1}, {2}, {3});


let o71 = {
	a: 1,
	b: 2,
	c: 3
}

let newObject = Object.assign({c: 10, d: 4}, o71);

