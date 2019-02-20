const types = [$('#fighter'), $('#cargo'), $('#miner')]

const hideAll = () => {
    console.log('in hide all')
    $('.builder').addClass('hidden')
    $('#fighter').addClass('hidden')
    $('#cargo').addClass('hidden')
    $('#miner').addClass('hidden')
    $('.types').removeClass('hidden')
}

const showFighter = () => {
    console.log('figher clicked')
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#fighter').removeClass('hidden')
}

const showCargo = () => {
    console.log('cargo clicked')
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#cargo').removeClass('hidden')
}

const showMiner = () => {
    console.log('miner clicked')
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#miner').removeClass('hidden')
}

const readInputs = () => {
    const obj = {}
    obj.name = $('#name').val()
    obj.pilot = $('#pilot').val()
    obj.fuelTankCapacity = $('#tank').val()
    obj.currentLocation = $('#currentLoc').val()
    obj.weapons = $('#weapons').val()
    obj.shield = $('#shield').val()
    obj.numberOfKills = $('#kills').val()
    obj.cargoCapacity = $('#cargoCap').val()
    obj.tradingRoute = $('#tradeRoute').val()
    obj.loadingCranes = $('#cranes').val()
    obj.miningTools = $('#mineTools').val()
    obj.miningTypes = $('#mineTypes').val()
    obj.miningStorage = $('#oreCap').val()
    return obj
}

const cleanInputs = () => {
    for(const el of $('input'))
    $(el).val('')
}

const getType = () => {
    const types = $('.shipType').toArray()
    for (const type of types) {
        if (!$(type).hasClass('hidden')) {
            return $(type).attr('id')
        }
    }
}

const titleString = string => {
    const result = string.replace( /([A-Z])/g, " $1" );
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1); 
    return finalResult
}

const getProperties = ship => {
    let str = ''
    for (const key in ship) {
        if (ship.hasOwnProperty(key) && key !== 'name') {
            str += `<li class="list-group-item"><strong>${titleString(key)}:</strong>  ${ship[key]}</li>`;
            
        }
    }
    return str
}

const renderShipCard = ship => {
    $('.station').append(`
        <div class="col">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title"><strong>${ship.name}</strong></h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            ${getProperties(ship)}
                        </ul>
                        <div class="card-body">
                            <a href="#" class="startEngine card-link">Start Engine</a>
                            <a href="#" class="takeOff card-link">Take Off</a>
                            <a href="#" class="land card-link">Land</a>
                        </div>
                    </div>
            </div>
        </div>
    `)
}


const addEventListener = (el, action) => {
    $('.station').on('click', `.${action}`, () => {
        console.log(el[action]())
    })
}


const showShips = ships => {
    $('.station').html('')
    // for(let i; i < ships.length; i++) {

    // }
    for (const ship of ships) {
        renderShipCard(ship)
        addEventListener(ship, 'startEngine')
        addEventListener(ship, 'takeOff')
        addEventListener(ship, 'land')
    }
    cleanInputs()
    hideAll()
}