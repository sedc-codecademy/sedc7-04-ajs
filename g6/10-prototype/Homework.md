# HOMEWORK

1. Create a constructor function for Person with properties { name, lastName, dateOfBirth, hometown } and add functions sayFullName() and age() to the prototype of the Person constructor function

2. Write a constructor function for Trainer with properties { name, lastName, dateOfBirth, hometown, course, yearsOfTeaching } that will have access to the functions from the Person prototype plus a function to its own prototype that will say the number of years the trainer has been teaching given course
    * (bonus) use the Person constructor to create the mutual properties
    * (bonus) use destructing for the parameters

3. (bonus) Write a function that can be called on any array and return the sum of all the elements in that array that are numbers i.e. 
```JavaScript
let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33] arr.getSumOfNumbers(...) // output 52
```

4. (bonus) Write a function that can be called on any object and return its keys and its values in seperate arrays, fillout predefined variables __keys__ and __values__ with the correct array i.e.
```JavaScript
let keys = [], values = []
let person = {
    name: 'Martina',
    middleName: 'Luther',
    lastName: 'Queen'
}
person.getKeysAndVals() // with the return result fill the variables acordingly
// expected
keys === ['name', 'middleName', 'lastName']
values === ['Martina', 'Luther', 'Queen]
``` 