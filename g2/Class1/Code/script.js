//console.log("We are live!");

// let myJson = `{
//     "trainer": "Dragan Gelevski",
//     "assistant": "Dejan Blazeski",
//     "students": [
//       "Bob",
//       "Samantha",
//       "Chris",
//       "Jill",
//       "Greg"
//     ],
//     "academy": "Code"
//   }`;
// let jsObject = JSON.parse(myJson);
// console.log(typeof(myJson));
// console.log(jsObject.students[0]);
// document.getElementById("sendRequest")
// .addEventListener("click", function(){
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function(){
//         console.log("Request is sent!");
//         if(xhr.status >= 200 && xhr.status < 300){
//             console.log("Request successful!");
//             let objectResponse = JSON.parse(xhr.response);
//             console.log(objectResponse);
//         } else {
//             console.log(xhr.responseText);
//         }
//     };
//     xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class1/students.json");
//     xhr.send();
// });
$(document).ready(function(){
    document.getElementById("sendRequest")
    .addEventListener("click", function(){
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class1/students.json",
            success: function(response){
                console.log("Request successful!");
                let responseObject = JSON.parse(response);
                console.log(responseObject);
                myResponse = responseObject;
                document.getElementById("asistent").innerText = myResponse.assistant;
            },
            error: function(response){
                console.log("The request has failed: " + response.status);
                console.log(response.responseText);
            }
        })
    });
})
