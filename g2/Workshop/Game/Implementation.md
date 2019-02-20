# Implementation
## Ship
```javascript
class Ship{
    constructor(name, crew, fuelCapacity, hullStrength, speed, img){
        this.name = name;
        this.crew = crew;
        this.fuelMax = fuelCapacity;
        this.fuel = fuelCapacity;
        this.hullMax = hullStrength;
        this.hull = hullStrength;
        this.speed = speed;
        this.credits = 500;
        this.img = img;
        this.isWorking = false;
        this.isDamaged = false;
        this.isDestroyed = false;
        this.dockedPlanet = null;
    }
    start(destinationPlanet){
        if(!destinationPlanet instanceof Planet) {
            console.log(`${destinationPlanet} is not a planet!`);
            return;
        }
        if(destinationPlanet === this.dockedPlanet){
            console.log(`You are already on planet ${destinationPlanet.name}.`);
            return;
        }
        if(this.crew >= 1 && this.fuel >= destinationPlanet.distance * 20 && !this.isDamaged && !this.isDestroyed){
            this.isWorking = true;
            if(this.dockedPlanet instanceof Planet){
                this.dockedPlanet.shipsDocked.pop();
            }
            console.log("Everything set and ready to go.");
        } else {
            console.log("The ship is not ready to go yet.")
            return;
        }
        console.log(`Heading to ${destinationPlanet.name}`);
        setTimeout(()=>{
            this.fuel -= destinationPlanet.distance * 20;
            this.dock(destinationPlanet);
        }, destinationPlanet.distance * 1000 / this.speed );
    }
    stats(){
        console.log("------- SHIP STATS -------");
        console.log(`CREW: ${this.crew}`);
        console.log(`FUEL: ${this.fuel}/${this.fuelMax}`);
        console.log(`HULL: ${this.hull}/${this.hullMax}`);
        console.log(`CREDITS: ${this.credits}`);
    }
    dock(planet){
        console.log(`Docking on planet ${planet.name}`);
        setTimeout(()=>{
            planet.shipsDocked.push(this);
            this.isWorking = false;
            this.dockedPlanet = planet;
            console.log(`${this.name} docked on the ${planet.name} planet.`);
        }, 2000);
    }
}
```
## Planet
```javascript
class Planet{
    constructor(name, size, population, distance, development){
        this.name = name;
        this.size = size;
        this.population = population;
        this.distance = distance;
        this.shipsDocked = [];
        this.development = development;
    }
    getMarketPrice(price){
        return this.development * price - Math.floor(this.population / this.size);
    }
    repair(ship){
        if(!ship instanceof Ship){
            console.log(`${ship} is not a ship.`);
            return;
        }
        if(this.shipsDocked.length === 0){
            console.log(`You are not docked on this planet!`);
            return;
        }
        if(ship.hull >= ship.hullMax){
            console.log(`Your ship is in great shape already!`);
            return;
        }
        let price = this.getMarketPrice(game.price.repair);
        if(ship.credits >= price){
            ship.credits -= price;
            ship.hull = ship.hullMax;
            ship.isDamaged = false;
            console.log("Hulls repaired!");
        } else {
            console.log(`You need ${price - ship.credits} more credits.`);
        }
    }
    refuel(ship){
        if(!ship instanceof Ship){
            console.log(`${ship} is not a ship.`);
            return;
        }
        if(this.shipsDocked.length === 0){
            console.log(`You are not docked on this planet!`);
            return;
        }
        if(ship.fuel >= ship.fuelMax){
            console.log(`Your fueltank is already full!`);
            return;
        }
        if(this.ship )
        console.log(game.price.fuel);
        let price = this.getMarketPrice(game.price.fuel);
        if(ship.credits >= price){
            ship.credits -= price;
            ship.fuel = ship.fuelMax;
            console.log("Ship refuled!");
        } else {
            console.log(`You need ${price - ship.credits} more credits.`);
        }
    }
    hireCrewMember(ship){
        if(!ship instanceof Ship){
            console.log(`${ship} is not a ship.`);
            return;
        }
        if(this.shipsDocked.length === 0){
            console.log(`You are not docked on this planet!`);
            return;
        }
        let price = this.getMarketPrice(game.price.crew);
        if(ship.credits >= price){
            ship.credits -= price;
            ship.crew += 1;
            console.log("A new crew member boarded the ship!");
        } else {
            console.log(`You need ${price - ship.credits} more credits.`);
        }
    }
}
```
