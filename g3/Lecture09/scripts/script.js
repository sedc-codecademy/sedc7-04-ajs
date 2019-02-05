// let url = 'https://swapi.co/api/people/1/'

// function Character({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld }) {
//     this.name = name
//     this.height = height
//     this.mass = mass
//     this.hair_color = hair_color
//     this.skin_color = skin_color
//     this.eye_color = eye_color
//     this.birth_year = birth_year
//     this.gender = gender
//     this.homeworld = homeworld
// }
// let char;
// const getChar = async url => {
//     const response = await fetch(url)
//     const result = await response.json()
//     // console.log(result)
//     char = new Character(result)
//     console.log(char)
// }
// getChar(url)

function sayMyName(obj) {
    let { name, lastName } = obj
    name
    lastName
    return `Hi, my name is ${name} ${lastName}`
}

// let obj = {
//     lastName: 'Mitkovski',
//     name: 'Igor',
//     nickname: 'Igeto'
// }

// console.log(sayMyName(obj))

// let arr = [1,2,3,4,5,6,7,8]

// let [ ,second, ,fourth, ,sixth] = arr
// second
// fourth
// sixth

let obj = {
    firstProp: 'DontGetMe',
    secondProp: 'GetMe',
    thirdProp: ['DontGetMe', 'DontGetMe', 'GetMe']
}

const getMe = obj => {
    let { secondProp: x, thirdProp: [,,thirdEl] } = obj
    return `${x} from second prop, ${thirdEl} from third el in array`
}
console.log(getMe(obj))


let arrayOfNums = [1,2,3,4,5,6,7,8,9,0]

function getEvensAndOdds(arr) {
    let evenNumbers = [], oddNumbers = []
    for (const num of arr) {
        num % 2 === 0 ?
            evenNumbers.push(num) :
            oddNumbers.push(num)
    }
    return [evenNumbers, oddNumbers]
}

let [evens, odds] = getEvensAndOdds(arrayOfNums)

// for (const arr of result) {
//     if(arr[0] % 2 === 0) {
//         evens = arr
//     } else {
//         odds = arr
//     }
// }
evens 
odds 