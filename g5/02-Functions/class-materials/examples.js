//1st task: calculate number on exponential with pure function
// 2 exp 2 = 4, 2 exp 3 = 8
// n2 = n * n, n3 = n * n * n

function exponential(a, n)
{
    let result = 1;

    for(let i = 1; i <= n; i++)
    {
        result = a * result;
    }

    return result;
}

exponential(2,3);

//2nd task clean the array from non integer values
const dataToClean = [1, NaN, 2, 3, NaN,'', 5 ];
// [1, 2, 3, 5]

function cleanUp(arrayOfItems)
{
    let clean = [];

    for(let i = 0; i < arrayOfItems.length; i++)
    {

        if(arrayOfItems[i] / arrayOfItems[i] === 1)
        {
            clean.push(arrayOfItems[i])
        }
    }

    return clean;
}



//3nd task clean the array from non integer values
const dataToClean = [1, NaN, 2, [3, NaN,'', 5] ];
// [1, 2, 3, 5]



//4rd get maximum time from array from any 4 values between 0-9
//[1,2,3,4] input expected output 23:41 23 hours and 41 minutes

let arr = [1,2,3,4] // 0-9

function timeCalc(arr)
{
    
}