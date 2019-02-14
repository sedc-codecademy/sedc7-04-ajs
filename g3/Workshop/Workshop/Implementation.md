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