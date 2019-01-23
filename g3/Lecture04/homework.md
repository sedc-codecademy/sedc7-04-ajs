## Homework 1
Write a function that will clean up an array, and return the cleaned up value.The function must not modify the original array.
Cleaning up of an array consists of removing all falsy values it they appear as elements in the array.
If the array has an array as an element, that element should be cleaned up too.

i.e. if the array is [1, NaN, 2, [3, NaN, 5] ], the result of cleanUp(array) should be [1, 2, [3, 5] ].

const dataToClean = [1, NaN, 2, [3, NaN,'', 5] ];


## Homework 2

Write a JavaScript function to convert an amount to coins.

Sample function : amountToCoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1


## Homework 3

Find all descendants for a given family member (recursive)

```javascript
const familyTree = [{
    name: "Oliver",
    lastname: "Stones",
    childrens: [
        {
            name: "Viktor",
            lastname: "Stones",
            childrens: []
        },
        {
            name: "Suzan",
            lastname: "Sloun",
            childrens: [
                {
                    name: "Oliver jr",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Alexandar",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Suzie",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Alex",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Gabriel",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Gabriela",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}];
```


## *BONUS*:
We have an array with numbers from 0 to 99 [0,1,2,3 .... 99], but two numbers in array are missing
Make an algorythm to find the missing numbers.
Lets assume that in the array missing numbers are 56 and 89

Expected result is new array with number [56, 89]

Use the code to setup the taks