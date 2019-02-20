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
        this.visited = false;
    }
    async start(destinationPlanet){
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
        let events = SpaceEvent.generateEvents(destinationPlanet.distance * 1000 / this.speed, game.events);
        for (const event of events) {
            await event.startEvent(this);
        }
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
            planet.visited = true;
        }, 2000);
    }
}

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

class SpaceEvent{
    constructor(name, description, crewModifier, fuelModifier, hullModifier){
        this.name = name;
        this.description = description;
        this.crew = crewModifier;
        this.fuel = fuelModifier;
        this.hull = hullModifier;
    }
    startEvent(ship){
        return new Promise((resolve, reject)=>{
          if(!ship instanceof Ship){
            reject("The object is not a ship!");
          }
          let that = this;
          setTimeout(()=>{
            ship.crew += that.crew;
            ship.fuel += that.fuel;
            ship.hull += that.hull;
            console.log(`--EVENT: ${that.name}--
            ${that.description}`);
            console.log(that.modifiedStats());
            console.log(`-----------------------`)
            resolve();
        }, 4000);
        })     
    }
    modifiedStats(){
        let result = "";
        result += this.crew > 0 ? `${this.crew} boarded your ship and is part of your crew now.\n` : "";
        result += this.crew < 0 ? `You lost ${Math.abs(this.crew)} of your crew.\n` : "";
        result += this.fuel > 0 ? `You got ${this.fuel} extra fuel!\n` : "";
        result += this.fuel < 0 ? `You lost ${Math.abs(this.fuel)} fuel!\n` : "";
        result += this.hull < 0 ? `Your ship took ${Math.abs(this.hull)} damage!\n` : "";
        result += this.hull > 0 ? `Your ship got ${this.hull} repair supplies!\n` : "";
        return result;
    }
    static generateEvents(time, events){
        let result = [];
        let getRandomNum = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        }
        let eventNum = 1;
        if(time > 26000){
            eventNum = 4;
        } else if(time > 18000){
            eventNum = 3;
        } else if(time > 8000){
            eventNum = 2;
        }
        for (let i = 0; i < eventNum; i++) {
            result.push(events[getRandomNum(0, events.length-1)]);
        }
        return result;
    }
}

let game = {
    price: {
        fuel: 50,
        repair: 60,
        crew: 80
    },
    ships: [
        new Ship("StarFighter", 3, 380, 500, 0.5, "img/StarFighter.png"),
        new Ship("Crushinator", 5, 540, 400, 0.2, "img/Crushinator.png"),
        new Ship("Scouter", 1, 300, 300, 0.9, "img/Scouter.png")
    ],
    planets: [
        new Planet("Rubicon9", 300000, 2000000, 4, 2, "img/Rubicon9.png"),
        new Planet("R7", 120000, 4000000, 7, 3, "img/R7.png"),
        new Planet("Magmus", 500000, 10000000, 6, 1, "img/Magmus.png"),
        new Planet("Dextriaey", 50000, 500000, 9, 3, "img/Dextriaey.png"),
        new Planet("B18-1", 250000, 4000000, 12, 2, "img/B18-1.png")
    ],
    events: [
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
    ],
    selectedShip: null,
    shipInfo: function(ship){
        return  `
        <div class="card" style="width: 18rem;">
        <img src="img/${ship.name}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${ship.name}</h5>
          <p class="card-text">Crew: ${ship.crew}</p>
          <p class="card-text">Hull Strength: ${ship.hull}</p>
          <p class="card-text">Fuel Capacity: ${ship.fuel}</p>
          <p class="card-text">Speed: ${ship.speed}</p>
        </div>
      </div>`
    },
    gameCardInfo: function(planet){
        return `
        <div class="card" style="width: 18rem;">
        <img src="img/${planet.name}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${planet.name}</h5>
          <p class="card-text">Area: ${planet.size}</p>
          <p class="card-text">Population: ${planet.population}</p>
          <p class="card-text">Development: ${planet.development}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" value="repair">Repair</li>
          <li class="list-group-item" value="refuel">Refuel</li>
          <li class="list-group-item" value="hire">Hire Crew Member</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link" value="stats">Ship Stats</a>
          <a href="#" class="card-link" value="goto">Go to</a>
        </div>
      </div>`
    },
    chooseShip: function(){
        let shipSelectDiv = document.getElementById("chooseShip");
        for(let ship of game.ships){
            let shipCard = document.getElementById(ship.name);
            shipCard.innerHTML = this.shipInfo(ship);
            shipCard.addEventListener("click", function(e){
                game.selectedShip = ship;
                shipSelectDiv.style.display = "none";
                document.getElementById("gameMap").style.display = "block"
            })
        }
    },
    fillGameBoard: function(){
        this.chooseShip();
        for (let planet of game.planets) {
            let planetDiv = document.getElementById(planet.name);
            planetDiv.innerHTML = game.gameCardInfo(planet);
            planetDiv.addEventListener("click", function(e){
                e.preventDefault();
                let option = e.target.getAttribute("value");
                option === "repair" ? planet.repair(game.selectedShip) : "";
                option === "refuel" ? planet.refuel(game.selectedShip) : "";
                option === "hire" ? planet.hireCrewMember(game.selectedShip) : "";
                option === "stats" ? game.selectedShip.stats() : "";
                option === "goto" ? game.selectedShip.start(planet) : "";
            })
        }
    }
}
async function startGame(){
    await game.fillGameBoard();
}

startGame();
