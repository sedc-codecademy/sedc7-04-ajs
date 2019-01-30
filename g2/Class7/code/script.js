// console.log("We are live!");
// function first(workTime){
//     return new Promise((resolve, reject)=>{
//       if(workTime <= 0){
//         reject("It's too short of a work time. Please try again!");
//       }
//       setTimeout(() => {
//         resolve("First thing, preparing for the second");
//       }, workTime);
//     })
//   }
  
//   function second(){
//     console.log("second thing!");
//   }
// //   console.log(first(0));
// first(0)
// .then(data => {
//     console.log(data);
//     // throw new Error("Nasha greshka!");
//     second();
//     })
// .catch(error => console.log(`ERROR: ${error}`))

// function  getDocuments(){
//     return new Promise((resolve, reject)=>{
//         $.ajax({
//             url:"https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json",
//             success: (response)=> {
//                 resolve(JSON.parse(response));
//             },
//             error: (error)=> {
//                 reject(error);
//             }
//         })
//     })
// }
// function showDocuments(documents){
//     if(!documents && typeof(documents) != "object"){
//         throw new Error("Problem with documents!");
//     }
//     if(documents.length === 0){
//         throw new Error("There is no documents!")
//     }
//     documents.forEach(doc => {
//         console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
//     });
// }
// getDocuments()
// .then(data => {
//     console.log("We got the documents!");
//     showDocuments(data);
// })
// .catch(error => console.log(error.message));

// function  getDocuments(){
//     return new Promise((resolve, reject)=>{
//         $.ajax({
//             url:"https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json",
//             success: (response)=> {
//                 resolve(JSON.parse(response));
//             },
//             error: (error)=> {
//                 reject(error);
//             }
//         })
//     })
// }
// function getImportantDocuments(documents){
//     let importantDocuments = documents.filter(doc => doc.important);
//     return new Promise((resolve, reject)=>{
//         if(importantDocuments.length === 0){
//           reject("There are no important documents!");
//         }
//         setTimeout(() => {
//           resolve(importantDocuments);
//         }, 3000);
//     })
// }
// function checkDocuments(documents){
//     if(!documents || typeof(documents) != "object"){
//         throw new Error("Problem with documents!");
//     }
//     if(documents.length === 0){
//         throw new Error("There is no documents!")
//     }
// }
function showDocuments(documents){
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
}
// getDocuments()
// .then(data => { // data = dokumentite od server
//     console.log("We got the documents!");
//     checkDocuments(data);
//     return getImportantDocuments(data); // vrati rezultat od funkcijata getImportantDocuments(data)
// })
// .then(data =>{
//    return showDocuments(data);
// })
// .then(data => {
//     // some code
// })
// .catch(error => console.log(error.message));

fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json")
.then(response => response.json())
.then(data => showDocuments(data))
.catch(error => console.log(error.message))
.finally(()=> console.log("Everything is done at: " + new Date()));