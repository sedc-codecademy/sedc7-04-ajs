/**
* 1) Write a function called displayFullName using object destructing for the parameters
* and the return of the function should be "Hi my name is [your name]"
*/
function someFunc() {
    let evens = [2,4,6]
    let odds = [1,3,5]
    return [evens, odds]
}
let arrOfEvensAndOdds = someFunc()
let evens, odds
for (const arr of arrOfEvensAndOdds) {
    if(arr[0] % 2 === 0) {
        evens = arr
    } else {
        odds = arr
    }
}
evens
odds

let [,betterEvens] = someFunc()
betterEvens


/**
 * 2) Get the second, fourth and seventh value of the array by using destructing
 */
let array = [1,'GetMe',"run", 'GetMe', 666, 'GetRich', 'GetMe', 'DontGetMe', true, () => {}]
let         [ ,second,     , fourth ,    ,           , seventh,            ,               ] = array
second
fourth
const [,x,,y,,,z,,,,] = array
x
y
z
seventh
/**
 * 3) Using destructing get the value 'GetMe' from our object
 */

 
let obj = {
    myProp: 'GetMe',
    mySecProp: 'DontGetMe'
}

let obj2 = {
    myProp: 'DontGetMe',
    mySecProp: 'DontGetMe',
    myThirdProp: {
        myProp: 'GetMe'
    }
}

let obj3 = {
    myProp: 'DontGetMe',
    mySecProp: 'DontGetMe',
    myThirdProp: {
        myProp: ['DontGetMe','DontGetMe','GetMe']
    }
}


let obj4 = {
    myProp: 'DontGetMe',
    mySecProp: 'GetMe',
    myThirdProp: {
        myProp: ['DontGetMe','DontGetMe','GetMe']
    },
    myFifthProp: {
        myProp: 'DontGetMe',
        mySecProp: ['DontGetMe','DontGetMe','DontGetMe'],
        myThirdProp: 'GetMe'
    }
}