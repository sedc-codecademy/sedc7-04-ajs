let arr = ['one', 'two', 'three', 'four', 'five', 'six']

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random() < 0.7
            return rand ? resolve() : reject('Something went wrong')
        }, ms)
    })
}

// delay(1000).then(() => {
//     console.log('two')
//     return delay(1000)
// }).then(() => {
//     console.log('three')
//     return delay(1000)
// }).then(() => {
//     console.log('four')
//     return delay(1000)
// }).then(() => {
//     console.log('five')
//     return delay(1000)
// }).then(() => {
//     console.log('six')
//     return delay(1000)
// }).catch(() => console.log('error'))

async function countToSix() {
    console.log('one')
    let res = await delay(1000)
    console.log('two')
    await delay(1000)
    console.log('three')
    await delay(1000)
    console.log('four')
    await delay(1000)
    console.log('five')
    await delay(1000)
    console.log('six')
}

// countToSix()

async function loopToSix(arr) {
    for (const num of arr) {
        try {
            console.log(num)
            await delay(1000)
        } catch (e) {
            console.log(e)
        }
    }
}

// loopToSix(arr)

let url = 'https://swapi.co/api/people/1/'

const fetchLuke = url => {
    fetch(url)
    .then(luke => luke.json())
    .then(luke => {
        fetch(luke.homeworld)
        .then(planet => planet.json())
        .then(planet => {
            luke.homeworld = planet.name
            console.log(luke)
        })
    })
}

// fetchLuke(url)

const getLuke = async url => {
    let luke = await fetch(url)
    luke = await luke.json()
    let planet = await fetch(luke.homeworld)
    planet = await planet.json()
    luke.homeworld = planet.name
    luke.films = await getData(luke.films)
    luke.species = await getData(luke.species)
    luke.vehicles = await getData(luke.vehicles)
    luke.starships = await getData(luke.starships)
    console.log(luke)
}

getLuke(url)

const getData = async urlsArr => {
    const data = []
    for(const url of urlsArr) {
        let obj = await fetch(url)
        obj = await obj.json()
        data.push(obj.title ? obj.title : obj.name)
    }
    return data
}