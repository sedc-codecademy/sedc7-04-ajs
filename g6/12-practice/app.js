let shipyard = []

let figherShip = {
    name: 'Executor', 
    pilot: 'DarthVader', 
    fuelTankCapacity: 500, 
    currentLocation: 'Outer Rim', 
    type: 'Fighter', 
    weapons: 'ion cannon', 
    shield: 'plasma Shield', 
    numberOfKills: 34523534
}

shipyard.push(new Fighter(figherShip))
shipyard.push(new Fighter(figherShip))
shipyard.push(new Fighter(figherShip))


const getProperties = ship => {
    str = ''
    for (const key in ship) {
        if(key !== 'name' || key !== 'type') {
            str += `<p class="card-text"><strong>${key}</strong> ${ship[key]}</p>`
        }        
    }
    return str
}

const renderShipCard = ship => {
    $('.station').append(`
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${ship.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${ship.type}</h6>
                ${getProperties(ship)}
            </div>
        </div>
    </div>
    `)
}
for (const ship of shipyard) {
    renderShipCard(ship)
}

