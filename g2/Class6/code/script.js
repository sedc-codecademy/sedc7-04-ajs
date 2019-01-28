// console.log("first");
// setTimeout(()=>{
//     console.log("this happens after 3 seconds!");
// }, 0);
// console.log("last");

// let handle = setInterval(()=>{
//     //alert("HAOS!");
//     console.log("HEY");
// }, 2000);
// document.querySelector("button")
// .addEventListener("click", ()=>{
//     clearInterval(handle);
// })

// function first(){
//     setTimeout(()=>console.log("First thing"),1000);
//     console.log("Random thing!");
// } 
// function second(){
// 	console.log("Second thing!");
// }
// first();
// second(); 

// function  first(callback){
// 	setTimeout(()=>{
// 		console.log("First thing");
// 		callback();
// 	},1000);
// }
// function  second(){
// 	console.log("Second thing!");
// }
// first(second);

function  makeCall(url, callback, callbackprint){
	$.ajax({
		url:  url,
		success:  function (response) {
			console.log('The request succeeded!');
            callback(response, callbackprint);
		},
		error:  function(response){
			console.log('The request failed!');
			callback(response);
		}
	});
}
function  print(results, callback){
    console.log(results);
    callback();
}

function print2(){
    console.log("THE LAST JEDI");
}
makeCall("https://swapi.co/api/people/1/", print, print2);