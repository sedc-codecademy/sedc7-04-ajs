# for-of loop
## What is it?
It is a loop that is used for cycling through an array. Because it is used for going through one whole array it doesn't need indexes or counters. It only needs the array and a variable that will hold an item on every cycle. Every cycle the for-of loop will get one item and it will put it in the variable so we can use it. This loop does not allow us to use indexes but it allows us to loop or go through arrays faster and cleaner. You can still use break and continue in this loop. 

#### Example with for loop ( get the sum from an array of numbers )
```javascript
let myArray = [2,6,4,7,3];
let sum = 0;
for(let i = 0; i < myArray.length; i++){
    sum += myArray[i];
}
console.log(sum);
```
#### Example with for-of loop ( get the sum from an array of numbers )
```javascript
let myArray = [2,6,4,7,3];
let sum = 0;
for(let number of myArray){
    sum += number;
}
console.log(sum);
```
What happens in this loop? Well it first takes the first element from the array and put it in the number variable(we can call it whatever we want, it doesn't have to be number). Then the loop runs the code ( sum += number; ). Then it gets the second element from the array and run the code again. Then the third and so on until it gets to the last. After the last element it stops on its own.  