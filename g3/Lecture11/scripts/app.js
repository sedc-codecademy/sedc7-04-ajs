$(() => {
    $('.hideAll').on('click', hideAll)
    $('#fighterBuilder').on('click', showFighter)
    $('#cargoBuilder').on('click', showCargo)
    $('#minerBuilder').on('click', showMiner)
    $('#build').on('click', () => {
        let [ship, type] = getVals()
        buildShip(ship,type)
        console.log(ship, type)
    })
})

let shipyard = [];

const getVals = () => {
    let ship = readInputs()
    let type = getType()

    return [ship, type]
}

const buildShip = (ship, type) => {
    switch (type) {
        case 'fighter':
            shipyard.push(new Fighter(ship))
            
            break;
        case 'cargo':
            shipyard.push(new Cargo(ship))
            break;
        case 'miner':
            shipyard.push(new Mining(ship))
            break;
        default:
            break;
    }
}

// Try to use one of these two for the homework
// Object.keys
// for..in