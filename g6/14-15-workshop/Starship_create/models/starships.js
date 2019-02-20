class Starship {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type }) {
        this.name = name
        this.pilot = pilot
        this.fuelTankCapacity = fuelTankCapacity
        this.currentLocation = currentLocation
    }
    startEngine() {
        return `${this.name} has started its engines`
    }
    takeOff() {
        return `${this.name} took off`
    }
    land() {
        return `${this.name} landed`
    }
}

class Fighter extends Starship {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type, weapons, shield, numberOfKills }) {
        super({ name, pilot, fuelTankCapacity, currentLocation, type });
        this.weapons = weapons;
        this.shield = shield;
        this.numberOfKills = numberOfKills;
    }

    shootWeapon1() {
        return `Shoot Weapon 1`
    }

    shootWeapon2() {
        return `Shoot Weapon 2`
    }

    shootWeapon3() {
        return `Shoot Weapon 3`
    }
}

class Cargo extends Starship {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type, cargoCapacity, tradingRoute, loadingCranes }) {
        super({ name, pilot, fuelTankCapacity, currentLocation, type });
        this.cargoCapacity = cargoCapacity;
        this.tradingRoute = tradingRoute;
        this.loadingCranes = loadingCranes;
    }

    load() {
        return `Ship loaded`
    }

    unload() {
        return `Ship unloaded`
    }
}

class Mining extends Starship {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type, miningTools, miningTypes, miningStorage }) {
        super({ name, pilot, fuelTankCapacity, currentLocation, type });
        this.miningTools = miningTools;
        this.miningTypes = miningTypes;
        this.miningStorage = miningStorage;
    }

    mine() {
        return `Mining right now`
    }
}