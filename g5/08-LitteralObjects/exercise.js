//Make new form in HTML where you will enter person name, lastname, age and height
//use personMap for create object from the form data and assign value to a array of objects
//Print the array on screen using UL/LI

//Homework make possibility each stored person to be loaded in the form and edited by user.

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
	}
}
