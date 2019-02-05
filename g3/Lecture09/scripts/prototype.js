// let person = {
//     name: 'Igor',
//     lastName: 'Mitkovski',
//     sayName() {
//         return `Hi my name is ${this.name} ${this.lastName}`
//     }
// }

// let igor = Object.create(person)

// console.log(igor.sayName())
// igor.name = 'Zoran'
// console.log(igor)
// console.log(new Object())

// Add a function startEngine to the prototype of our constructor function

$(() => {
    $('#getInfo').on('click', () => {
        let values = readValues()
        let model = new Car(values)
        showNewVehicle(model)
        console.log(model.startEngine())
    })
})

function readValues() {
    const obj = {}
    obj.make = $('#make').val()
    obj.model = $('#model').val()
    obj.year = $('#year').val()
    obj.numberOfDoors = $('#numOfDoors').val()
    obj.transmition = $('#transmition').val()
    return obj
}
function showNewVehicle({ make, model, year, numberOfDoors, transmition }) {
    $('#vehicles').append(`
        <tr>
            <td>${make}</td>
            <td>${model}</td>
            <td>${year}</td>
            <td>${numberOfDoors}</td>
            <td>${transmition}</td>
        </tr>
    `)
}

function Vehicle({ make, model, year }) {
    this.make = make
    this.model = model
    this.year = year
}
Vehicle.prototype.startEngine = function () {
    return `${this.model} ${this.make} started its engine`
}

function Car(obj) {
    let { numberOfDoors, transmition } = obj
    this.numberOfDoors = numberOfDoors
    this.transmition = transmition
    Vehicle.call(this, obj)
}

Car.prototype = Object.create(Vehicle.prototype)

// new Bike()

