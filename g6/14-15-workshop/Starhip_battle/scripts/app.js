const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve()
        }, ms)
    })
}

class Fighter {
    constructor(name, crew, weapon) {
        this.name = name
        this.crew = crew
        this.weapon = weapon
        this.health = 100
        this.shield = 50
        this.stats = {
            wins: 0,
            losses: 0,
            draw: 0
        }
    }
    get hp() {
        return this.health + this.shield
    }
    get replenish() {
        console.log('Health and shield replenished')
        this.health = 100
        this.shield = 50
    }
    set receiveDamage(dmg) {
        if(this.shield > 0) {
            if(this.shield < dmg) {
                this.health -= dmg - this.shield
                this.shield = 0
            } else {
                this.shield -= dmg
            }
        } else {
            if(this.health < dmg) {
                this.health = 0
            } else {
                this.health -= dmg
            }
        }
        console.log(`${this.name} took a hit and now has ${this.health} HP and ${this.shield} shield`)
    }
    async fireWeapon(opponent) {
        console.log(`${this.name} has armed it's ${this.weapon} and is preparing to fire`)
        await delay(2000)
        let damage = Math.ceil(Math.random() * 9 + 15)
        console.log(`${this.name} has fired and did ${damage} damage to ${opponent} `)
        await delay(1000)
        return damage
    }
}


let executor = new Fighter('Executor', 4, 'Ion Cannons')
let mileniumFalcon = new Fighter('Milenium Falcon', 2, 'Plasma Turrets')
let tieFighter = new Fighter('Tie Fighter', 1, 'Laser Guns')
let ships = [executor, mileniumFalcon, tieFighter]
let battleGround = []

const renderShipCard = (ship, id) => {
    $('.station').append(`
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><strong>${ship.name}</strong></h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Crew: ${ship.crew}</li>
                    <li class="list-group-item">Uses: ${ship.weapon}</li>
                </ul>
                <div class="card-body">
                    <button id='${id}' class='btn btn-primary'>Choose ship</button>
                </div>
            </div>
        </div>
    `)
    $(`#${id}`).on('click', () => {
        if(battleGround.length < 2) {
            if (battleGround.indexOf(Number(id)) === -1) {
                battleGround.push(Number(id))
                fillArena(battleGround)
            } else {
                alert(`This ship is already in the arena`)
            }
        } else {
            alert(`There can't be more than two ships at a time in the arena`)
        }
    })
}

function fillArena(bg) {
    if(bg.length === 1) {
        $('.blue').html(`<h1>${ships[bg[0]].name}</h1>`)
    } else if (bg.length === 2) {
        $('.red').html(`<h1>${ships[bg[1]].name}</h1>`)
    }
}

function fillStation() {
    for (const i in ships) {
        renderShipCard(ships[i], i)
    }
}
fillStation()

$('#startBattle').on('click', () => {
    if (battleGround.length === 2) {
        arena(ships[battleGround[0]], ships[battleGround[1]])
    }
})

$('#clearArena').on('click', () => {
    battleGround = []
    $('.blue').html('')
    $('.red').html('')
})

async function arena(blue, red) {

    if(blue instanceof Fighter) {
        console.log(`${blue.name} has joined the arena`)
        blue.replenish
        await delay(2500)
    } else {
        console.log('Only a fighter type ship can join the arena')
        return
    }

    if(red instanceof Fighter) {
        console.log(`${red.name} has joined the arena`)
        red.replenish
        await delay(2500)
    } else {
        console.log('Only a fighter type ship can join the arena')
        return
    }

    console.log(`The battle between ${blue.name} and ${red.name} will start in...`)
    for(let i = 5; i >= 0; i--) {
        if(i !== 0) {
            console.log(i)
            await delay(1000)
        } else {
            console.log(`=== FIGHT!!! ===`)
        }
    }
    await delay(2000)
    await battle(blue, red, 1)
    getLeaderboard(ships)
}

async function battle (blue, red, rounds = 5) {

    for(let i = 1; i <= rounds; i++) {
        console.log(`======= ROUND ${i} =======`)
        blue.receiveDamage = await red.fireWeapon(blue.name)
        if (blue.hp === 0) {
            red.stats.wins += 1
            blue.stats.losses += 1
            console.log(`${red.name} has won the battle in round ${i} by eliminating its opponent`)
            return
        }
        await delay(3000)
        red.receiveDamage = await blue.fireWeapon(red.name)
        if (red.hp === 0) {
            blue.stats.wins += 1
            red.stats.losses += 1
            console.log(`${red.name} has won the battle in round ${i} by eliminating its opponent`)
            return
        }
        await delay(3000)
    }
    if (blue.hp > red.hp) {
        blue.stats.wins += 1
        red.stats.losses += 1
        console.log(`${blue.name} wins the battle against ${red.name}`)
    } else if (blue.hp < red.hp) {
        red.stats.wins += 1
        blue.stats.losses += 1
        console.log(`${red.name} wins the battle against ${blue.name}`)
    } else {
        blue.stats.draw += 1
        red.stats.draw += 1
        console.log(`The battle between ${blue.name} and ${red.name} ended in a tie`)
    }

}

// arena(executor, mileniumFalcon)
getLeaderboard(ships)

function getLeaderboard(ships) {
    let sorted = ships.sort((a, b) => (b.stats.wins + (b.stats.draw / 2) - b.stats.losses) - (a.stats.wins + (a.stats.draw / 2) - a.stats.losses))

    let rowData = ''
    for (const ship of sorted) {
        rowData += `
        <tr>
            <td>${ship.name}</td>
            <td>${ship.weapon}</td>
            <td>${ship.stats.wins}</td>
            <td>${ship.stats.losses}</td>
            <td>${ship.stats.draw}</td>
        </tr>
        `
    }

    $('.leaderboard').html(`
        <table class='table table-light'>
            <thead>
                <th>Ship Name</th>
                <th>Weapon</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Draws</th>
            </thead>
            <tbody>
            ${rowData}
            </tbody>
        </table>
    `)

}

// function shipPicker(ships) {
//     for (const i in ships) {
//         console.log(i, ships[i])
//         $('.dropdown-menu').append(`<a id='${i} class="dropdown-item" href="#">${ships[i].name}</a>`)
//     }
// }
// shipPicker(ships)