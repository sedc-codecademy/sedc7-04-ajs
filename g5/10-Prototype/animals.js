//Animals kingdom

function Animals()
{
	this.isALive;
	this.isEating;
	this.hasARightToDie = true;
	this.hasATale;
}

function Walk()
{
	
}

function Swim()
{
	
}

function Fly()
{
	
}

Walk.prototype = Object.create(Animals.prototype);
Swim.prototype = Object.create(Animals.prototype);
Fly.prototype = Object.create(Animals.prototype);

Walk.prototype.numberOfLegs = null;
Swim.prototype.numberOfFins = null;
Fly.prototype.numberOfWings = null;
Fly.prototype.sound = null;
Fly.prototype.setSound = function(soundType){
	this.sound = soundType;
}

Fly.prototype.getSound = function(){
	return this.sound;
}

function People(){}
function OtherWalkAnimals(){}

People.prototype = Object.create(Walk.prototype);
People.numberOfLegs = 2;

function SingBirds(){}
function NonSingBird(){}

SingBirds.prototype = Object.create(Fly.prototype);
NonSingBird.prototype = Object.create(Fly.prototype);

//Extend existing construct functions with following properties
/*
	People to be able to have a color of eyes and hair, and to be set or get over functions (e.g fly.sound)
	
	Create new different instances of people and assign values to them for color of hair and eyes.
	
	Make the people live, give them to eat and return status that they had eaten.
	
	Put all People in array and print them on screen using CSS for styling to color their hair and eyes (on screen) and to show their status of eaten or not.
	
	CSSTricks https://css-tricks.com/
*/