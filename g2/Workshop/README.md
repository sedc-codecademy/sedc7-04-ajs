# Ultimate Space Explorer 3000 🎮
## Requirements 
We are tasked in building a space game. In the space game we have an option to choose 3 ships with different stats and go on adventures to planets that will be shown on a galaxy map. Our job is to explore all planets in the universe. But this task will not be easy because we need to manage our ship, fuel and crew to survive this journey. 

### A ship 🚀
A ship is chosen at the start of the game. That ship will be the vehicle that we travel the galaxy and try to explore every planet. A ship will consist of:
* name - the ship name
* crew - number of crew
* fuel - fuel of the ship
* hull - hull strength of the ship
* speed - speed of the ship  ( 0.1 - 1 )
* credits - currency for buying services ( not settable, 500 by default )
* img - image link or path to an image of the ship
* isWorking - flag if the ship is working or not ( not settable, false by default )
* isDamaged - flag if the ship is damaged or not ( not settable, false by default )
* isDestroyed - flag if the ship is destroyed or not ( not settable, false by default )
* dockedPlanet - the planet on which the ship is docked at ( not settable, null by default )
* start - Method that accepts **a planet** as parameter and will start an exploration to that planet
	* Can't go to something that is not a planet
	* Can't go to a planet that the ship is already docked on
	* Can't start if the ship is damaged, destroyed, has no crew or has no fuel to reach the planet
	* isWorking is changed to true
	* **Fuel is is calculated** by this formula: fuel = fuel - (planet distance  *  20);
	* The ship should get to the planet and **dock** in different time span depending on the speed and distance to the planet
	* **Time to get to a planet is calculated** by this formula: planet distance  *  1000ms  /  speed of ship
* dock - method that accepts a planet parameter and is called when a ship needs to dock on a planet
	* Ship is docking on a planet for 2 seconds
	* The ship is added to the dockedShips array of the planet
	* The ship isWorking is changed to false
	* The dockedPlanet property of the ship is changed to the planet
### A planet 🌎
A planet is an entity that floats in to space. It is shown on the web page so that the player can click on it and travel to it. When a ship gets on a planet it can either repair, refuel or hire a crew member.
* name - Planet name
* size - Planet size
* population - Planet population
* distance - Planet distance
* shipsDocked - Ships currently docked on the planet ( not settable, empty array by default )
* development - The development level of the planet ( 1 - 3 )
* img - link to an image
* getMarketPrice - method that accepts a price as an attribute of a service and returns the planet market value of that price by this formula : price = planet development * price - Math.floor( planet population / planet size )
* repair - accepts a ship as an attribute and repairs it's hulls to max
	* if the attribute is not a ship, you can't repair it
	* if the ship is not docked on this planet, you can't repair it
	* if the hull is already at max strength you can't repair it
	* if the ship has not enough credits you can't repair it
	* When the ship is repaired it's hull is changed to maximum value, the price is subtracted from the ship credits and the property isDamaged is set to false
* refuel - accepts a ship as an attribute and refuels it's tank to max
	* if the attribute is not a ship, you can't refuel it
	* if the ship is not docked on this planet, you can't refuel it
	* if the fuel is already at max capacity you can't refuel it
	* if the ship has not enough credits you can't refuel it
	* When the ship is refueled it's fuel is changed to maximum value and the price is subtracted from the ship credits
* hireCrewMember - accepts a ship as an attribute and adds one to the crew of the ship
	* if the attribute is not a ship, you can't add a crew member
	* if the ship is not docked on this planet, you can't add a crew member
	* if the ship has not enough credits you can't add a crew member
	* When the ship hires a new crew member it's crew is expanded by 1 and the price is subtracted from the ship credits
### SpaceEvent ☄
Space Event is something that happens while the ship is flying in space. Events usually have some modifier to the ship in a positive or negative way. Number of events are decided by the ships time to reach its destination. An event happens every 4 seconds while the ship is traveling.
* name - Name of the event
* description - Description what has happened to the ship
* crewModifier - Crew modification from the event ( ex: 0 if the crew is affected, -1 if a crew is lost and 1 if a crew member is added )
* fuelModifier - Fuel modification from the event ( same example as crew )
* hullmodifier - hull modification from the event ( same example as crew )
* startEvent - Accepts an argument of a ship object. Checks if the object is a ship. If it is after 4 seconds it changes the ship stats if there are any modifiers and prints a message in the console with the name of the event, the description and what changed on the ship. **Help: Think what this should return if we want to queue them one by one.**
* generateEvents - **static** method that accepts time and array of events and chooses random events from the array depending on the time. The method starts from 1 event. If the time is longer than 8 seconds it chooses 2 events, if it's more than 18 seconds 3 events and if its larger than 26 seconds 4 events. The events are chosen at random and there can be multiple events of the same kind. This method returns an array of the chosen events.

### Resources 🎁
#### Prices
```javascript
price: {
    fuel: 50,
    repair: 60,
    crew: 80
}
```
#### Ships
```javascript
ships: [
    new Ship("StarFighter", 3, 380, 500, 0.5, "img/StarFighter.png"),
    new Ship("Crushinator", 5, 540, 400, 0.2, "img/Crushinator.png"),
    new Ship("Scouter", 1, 300, 300, 0.9, "img/Scouter.png")
]
```
#### Planets
```javascript
planets: [
    new Planet("Rubicon9", 300000, 2000000, 4, 2, "img/Rubicon9.png"),
    new Planet("R7", 120000, 4000000, 7, 3, "img/R7.png"),
    new Planet("Magmus", 500000, 10000000, 6, 1, "img/Magmus.png"),
    new Planet("Dextriaey", 50000, 500000, 9, 3, "img/Dextriaey.png"),
    new Planet("B18-1", 250000, 4000000, 12, 2, "img/B18-1.png")
],
```
#### Events
```javascript
let events = [
        new SpaceEvent("Fuel Leak", "Due to low maintenance of the ship, the fuel tank leaked. The leak was patched, but we lost some fuel.", 0, -50, 0 ),
        new SpaceEvent("Pirates!", "Space pirates attacked the ship! We escaped, but our hull took some damage!", 0, -20, -150 ),
        new SpaceEvent("Unknown substance", "An unknown substance was found on the cargo ship. A crew member touched it and died on the spot.", -1, 0, 0 ),
        new SpaceEvent("Asteroid field", "We entered an asteroid field. It was hard, but our captain managed to go out of it.", 0, -30, -100 ),
        new SpaceEvent("Fire on deck", "The main system overheated and fire broke from one of the panels. The crew quickly extinguished it.", 0, 0, -70 ),
        new SpaceEvent("Bad stop", "You stop at a nearby station for a pit-stop. They give you repair supplies.", 0, -50, +50 ),
        new SpaceEvent("Captains Birthday", "It's the captain's birthday. Everybody got drunk. Nobody remembers what happened the last 12 hours.", -1, -60, -100 ),
        new SpaceEvent("Space Shark", "Your ship is attacked by a space shark. After killing it, you watch a tutorial on how to turn shark blood in to fuel.", 0, +80, -120 ),
        new SpaceEvent("Alien in need", "An alien is stranded on it's broken ship. It took some time and effort but you save him and board him on your ship.", 1, -50, -50 ),
        new SpaceEvent("Hail the federation", "A federation cruiser hails you. They help you with supplies and fuel.", 0, +100, +100 ),
        new SpaceEvent("Destroyed Transport Ship", "You encounter a destroyed transport ship. It's dangerous, but you try salvaging its fuel tank.", 0, +150, -80 ),
        new SpaceEvent("Angry Spider", "An angry spider appears on the deck. The captain stomps on it. Everything is fine", 0, 0, 0 )
    ];
```
