class Starship {
    constructor(name, pilot, fuelCapacity, hullStrength, type) {
        this.name = name;
        this.pilot = pilot;
        this.fuelCapacity = fuelCapacity;
        this.hullStrength = hullStrength;
        this.type = type;
    }

    takeHit(strength) {
        this.hullStrength -= strength;
    }

    toString() {
        return `The ${this.type} "${this.name}" piloted by ${this.pilot}, with fuel capacity of ${this.fuelCapacity}, hull strength of ${this.hullStrength}`;
    }

}

class Fighter extends Starship {
    constructor({name, pilot, fuelCapacity, hullStrength, weaponStrength, shieldCapacity}) {
        super(name, pilot, fuelCapacity, hullStrength, "fighter");
        this.weaponStrength = weaponStrength;
        this.shieldCapacity = shieldCapacity;
    }

    attack(starship) {
        starship.takeHit(this.weaponStrength);
    }

    takeHit(strength) {
        if (this.shieldCapacity > 0) {
            if (this.shieldCapacity > strength) {
                this.shieldCapacity -= strength;
            } else {
                super.takeHit(strength - this.shieldCapacity);
                this.shieldCapacity = 0;
            }
        } else {
            super.takeHit(strength);
        }
    }

    toString() {
        return `${super.toString()}, shield of ${this.shieldCapacity}, weapon strength of ${this.weaponStrength}`;
    }

}

class CargoShip extends Starship {
    constructor(name, pilot, fuelCapacity, hullStrength, cargoCapacity, isSmuggler, smuggleCapacity) {
        super(name, pilot, fuelCapacity, hullStrength, "cargo");
        this.cargoCapacity = cargoCapacity;
        this.isSmuggler = isSmuggler;
        this.smuggleCapacity = this.isSmuggler ? smuggleCapacity : 0;
        this.cargo = [];
        this.usedCapacity = 0;
    }

    loadCargo(type, quantity) {
        const freeCapacity = this.cargoCapacity - this.usedCapacity;
        if (quantity > freeCapacity) {
            throw Error("not enough room in cargo bay");
        }
        this.cargo.push({ type, quantity });
        this.usedCapacity += quantity;
    }

    unloadCargo(type, quantity) {
        const cargo = this.cargo.find(item => item.type === type);
        if (!cargo) {
            throw Error("Cargo type does not exist");
        }
        if (cargo.quantity < quantity) {
            throw Error("Not enough cargo of that type");
        }

        if (cargo.quantity > quantity) {
            cargo.quantity -= quantity;
            this.usedCapacity -= quantity;
            return { type, quantity};
        }
        
        // if (cargo.quantity === quantity)
        const cargoIndex = this.cargo.findIndex(item => item.type === type);
        this.cargo.splice(cargoIndex, 1);
        this.usedCapacity -=quantity;
        return cargo;
    }
}

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}