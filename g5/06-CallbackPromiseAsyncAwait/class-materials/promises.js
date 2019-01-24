//Promises
//new Promise(function(resolve, reject) { ... } );

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");


promise.then(

  script => alert(`${script.src} is loaded!`),

  error => alert(`Error: ${error.message}`)

);



//
var promise1 = new Promise(function(resolve, reject) {

  setTimeout(function() {

    resolve('foo');

  }, 300);
  
});


promise1.then(function(value) {

  console.log(value);

  // expected output: "foo"

},
function(error) {
	console.log(error);
});

//Ajax in promise

let promise2 = new Promise((resolve, reject) => {
		$.ajax({
		    url:"http://example/getlink",
		    success: (data) => { resolve(data) },
		    error: (error) => { reject(error) }
		});
});

promise2.then((data) => {
	console.log(data);
}, (error) => {
	console.log(error);
});

function externalfunctionName(dataFromPromise)
{
	//...
}

let arrayOfPromises = [
	new Promise((resolve, reject) => {...}),
	new Promise((resolve, reject) => {...}),
	new Promise((resolve, reject) => {...}),
	new Promise((resolve, reject) => {...})
];

Promise.all(arrayOfPromises).then((resolved) => {
	// resolved = [
	// 	[user1, user2],
	// 	[user1Details],
	// 	[post1, post2, post3],
	// 	[urlOfPost1]
	// ]
	
	externalfunctionName(resolved);

}, (error) => {});

let promise4 = new Promise((resolve, reject) => {
	
})

let promise3 = new Promise((resolve, reject) => {
	
})

promise3.then((result) => {
	promise4.then((result) => {
		//promise5.then(...)
	},
	(error) => {
		
	})
},
(error) => {
	
})