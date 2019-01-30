# Asynchronous &#x1F34E;
## Solving problems with callback functions
With callbacks we can control the flow of our code and be sure that our code will execute in some particular order. This is helping us write reliable code and handle different kind of problems regarding dependency ( entities depending on each other completion ). But with this method of solving these issues, we run in to a different kind of a problem. If we have a lot of dependencies and we write a huge chain of callbacks we get an unorganised and hard to read code. 
#### Simple example
In simple examples we don't really see the problem. In this case we have two things that need to happen in a certain order. 
```javascript
function simple() {
  setTimeout(function() {
    console.log('1. First thing, preparing for the second');
    setTimeout(function() {
      console.log('2. Second thing');
    }, 2000);
  }, 2000);
};
```
#### Complex example
But in more complex examples we can see what happens. A huge wave of code that is hard to examine and read. 
```javascript
function complex() {
  setTimeout(function() {
    console.log('1. First thing, preparing for the second');
    setTimeout(function() {
      console.log('2. Second thing, preparing for the third');
      setTimeout(function() {
	    console.log('3. Third thing, preparing for the forth');
	    setTimeout(function() {
		  console.log('4. Forth thing, preparing for the fifth');
		  setTimeout(function() {
		    console.log('5. Fifth thing, preparing for the Sixth');
		    setTimeout(function() {
		      console.log('6. Sixth and last thing');
		    }, 2000);
	      }, 2000);
	    }, 2000);
	  }, 2000);
    }, 2000);
  }, 2000);
};
```
This phenomena has many names. Callback Hell, Hadouken programming, Pyramid of doom among the many.  

## Better solution: Promises 
In 2015 javascript developers finally got the highly anticipated feature, promise. Promises are basically a more elegant and sophisticated way of waiting on things. When we know that we have to wait for some kind of data we create a Promise object and put it as a placeholder for the data that we need. The promise then goes through it's states that represent the status of the data that we need. A promise can be in one of 3 states in any point in time. 
1. Pending
2. Fulfilled
3. Rejected

When we wait for our data, the promise is in the pending state. The moment we get a result of our request for the data, the state will change either to Fulfilled or Rejected depending on the data that we get. If we successfully get the data, the promise state will turn in to Fulfilled and the promise will execute the methods that we have written to handle the requested data. If we don't get the data that we need or there were some problems in the process of acquiring the data, the  state will change to Rejected and the promise the code that we have written when expecting problems and errors. 
### Handling promises
The cool thing about promises is that we don't have to write code inside the promise to have something executed in a particular order ( Synchronously ). We can write the function that returns the promise and then call methods that will be executed after the promise is resolved or rejected. 
* myFunction()**.then**( data => ...handling the data ) - a function that is executed when a promise is resolved and accepts a callback with a parameter in which the data from the resolved promise is stored.
* myFunction().then(...)**.catch**( error => ...handling error ) - a function that is executed when a promise is rejected and accepts a callback with a parameter in which the error message from the rejected promise is stored. This can also be executed if there is an exception or error while executing the code in the .then() function.
* myFunction().then(...).catch(...).**finally**(()=>... some code) - a function that is executed at the end of the whole resolve chain. This function is executed always no matter if the promise is resolved or rejected and has no parameters. 
#### A simple promise
A simple promise that waits for the first function to finish so it can execute second.
```javascript
function first(workTime){
  return new Promise((resolve, reject)=>{
    if(workTime <= 0){
      reject("It's too short of a work time. Please try again!");
    }
    setTimeout(() => {
      resolve("First thing, preparing for the second");
    }, workTime);
  })
}

function second(){
  console.log("second thing!");
}
first(1000)
.then(success => {
	console.log(success);
	second();
	})
.catch(error => console.log(`ERROR: ${error}`))
.finally(()=> console.log(`Everything is done at: ${new Date()}`))
```
#### Handling AJAX call with a promise
An ajax call to some documents online that returns a promise. When the promise is resolved ( the ajax call is over ) we call the show documents function with the documents.
```javascript
function  getDocuments(){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json",
            success: (response)=> {
                resolve(JSON.parse(response));
            },
            error: (error)=> {
                reject(error);
            }
        })
    })
}
function showDocuments(documents){
    if(!documents && typeof(documents) != "object"){
        throw new Error("Problem with documents!");
    }
    if(documents.length === 0){
        throw new Error("There is no documents!")
    }
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
}
getDocuments()
.then(data => {
    console.log("We got the documents!");
    showDocuments(data);
})
.catch(error => console.log(error.message));
```
#### Chaining promises
Promises can be chained. This means that we can ask for something, get a promise as a result and then add another **then** and wait for that promise next. This way we can wait for multiple things in a certain order.
```javascript
function  getDocuments(){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json",
            success: (response)=> {
                resolve(JSON.parse(response));
            },
            error: (error)=> {
                reject(error);
            }
        })
    })
}
function getImportantDocuments(documents){
    let importantDocuments = documents.filter(doc => doc.important);
    return new Promise((resolve, reject)=>{
        if(importantDocuments.length === 0){
          reject("There are no important documents!");
        }
        setTimeout(() => {
          resolve(importantDocuments);
        }, 3000);
    })
}
function checkDocuments(documents){
    if(!documents || typeof(documents) != "object"){
        throw new Error("Problem with documents!");
    }
    if(documents.length === 0){
        throw new Error("There is no documents!")
    }
}
function showDocuments(documents){
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
}
getDocuments()
.then(data => {
    console.log("We got the documents!");
    checkDocuments(data);
    return getImportantDocuments(data);
})
.then(data =>{
   showDocuments(data);
})
.catch(error => console.log(error.message));
```
### Using fetch
fetch is arguably one of the easiest way to get data from the outside world and send requests. Basically we write fetch and write the address where we want to make a request. The fetch API makes a call for us and returns a promise. The promise contains the request that we sent. In order to extract our data from the request object we must first call the **.json()** method on the response and return it. Then we can get the data that we requested. 
```javascript
fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json")
.then(response => response.json())
.then(data => showDocuments(data))
.catch(error => console.log(error.message))
.finally(()=> console.log("Everything is done at: " + new Date()));
```	