let students = [{ name: "Tom", age: 25 }, { name: "Bob", age: 22 }, { name: "Neo", age: 25 }];
let newArray = [1, "test", true];
for (let i = 0; i < newArray.length; i++) {
    //const element = newArray[i];
    console.log(newArray[i]);
}

students.forEach(student => console.log(student));

newArray.forEach(function (element) {
    console.log(element);
});
debugger;
function t(){
    return ""
}
t();
let students25 = [];
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if(student.age >= 25)
        students25.push(student);
}
console.log(students25);

let students25Filter = students.filter(student => student.age >= 25);
console.log(students25Filter);


let studentsNames25 = students
                        .filter(student => student.age >= 25)
                        .map(student => student.name);

console.log(studentsNames25);                        


let numArray = [1,2,3,4];
let sumOfNum = numArray.reduce((sum, elem) => sum += elem, 5); //10 + 5

// let sum = 0;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     sum += element;
// }

debugger;

let sortArray = [1,3,11,25,8,9];

let newSortedArray = sortArray.sort((e1,e2)=> e2 - e1);
console.log(newSortedArray);
let max =0;

// let sorted = [];
// for (let i = 0; index < sortArray.length; i++) {
//     for (let j = i+1; j < sortArray.length; j++) {
//         let temp = sortArray[i];
//         if(sortArray[i] < sortArray[j]){

//         }
//         temp = sortArray[j]
//     }
    
// }