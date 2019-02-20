$(() => {
    $('.hideAll').click(hideAll)
    $('#fighterBuilder').on('click', () => {
        showFighter()
    })
    $('#cargoBuilder').on('click', () => {
        showCargo()
    })
    $('#minerBuilder').on('click', () => {
        showMiner()
    })
    $('#build').on('click', () => {
        let [ ship, type ] = getVals()
        buildShip(ship, type)
        showShips(shipyard)
    })
})

let type

const shipyard = []

const getVals = () => {
    const ship = readInputs()
    const type = getType()
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
        default:
            break;
    }
}
