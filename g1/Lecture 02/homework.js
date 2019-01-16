function getProperties(number) {
    return {
        length: getLength(number),
        isPalindrome: getIsPalindrome(number),
        isPrime: getIsPrime(number),
        isEven: number % 2 === 0,
        sign: getSign(number)
    };
}

function getLength(number) {
    return (number + "").length;
}

function getIsPalindrome(number) {
    let digits = (number + "").split("");
    let reversed = digits.reverse().join("");
    return String(number) === reversed;
}

let getIsPrime = number => {
    if (number <= 0) {
        return false;
    }
    if (number === 1) {
        return false;
    }
    if (number===2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    for (let index = 3; index < Math.sqrt(number); index+=2) {
        if (number % index ===0) {
            return false;
        }
    }

    return true;
}

let getSign = number => {
    if (number === 0) {
        return "zero";
    }
    if (number > 0) {
        return "positive";
    }
    return "negative";

    //return number > 0 ? "positive" : "negative";
}
