
const hideAll = () => {
    $('.types').removeClass('hidden')
    $('.builder').addClass('hidden')
    $('#fighter').addClass('hidden')
    $('#cargo').addClass('hidden')
    $('#miner').addClass('hidden')
}
const showFighter = () => {
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#fighter').removeClass('hidden')
}
const showCargo = () => {
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#cargo').removeClass('hidden')
}
const showMiner = () => {
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#miner').removeClass('hidden')
}

const readInputs = () => {
    let obj = {}
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

const getType = () => {
    const types = $('.shipType').toArray()
    for (const type of types) {
        if(!$(type).hasClass('hidden')) {
            return $(type).attr('id')
        }
    }
}