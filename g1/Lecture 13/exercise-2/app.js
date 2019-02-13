const mileniumFalcon = new Fighter({
    name: "Milenium Falcon",
    pilot: new Person("Han", "Solo"),
    hullStrength: 500,
    shieldCapacity: 200,
    weaponStrength: 30,
    fuelCapacity: 1000
});

const cargo = new CargoShip(
    "Cargo-one", 
    new Person("Noone", "Important"),
    500,
    1000,
    2000,
    false,
    null
);

console.log(mileniumFalcon);
console.log(cargo);