# Javascript under the hood &#x1F34E;
## Where and how is my JS code running?
Modern javascript runs most of the time in the browser. This means that it gets executed and lives in the browser, by the browser engine and compiler. This is really important because javascript was not aways compiled and refined like it is today. Today we don't just execute javascript, but our scripts actually work with the browser hand in hand to load modern web pages. Javascript works in one thread. This means that there is only one stack or queue for code or tasks to be executed and they are beeing executed one by one. When we execute some functions they go to the top of the stack, they get executed and go out of the stack one by one. But what if one of those function is waiting for some response from the internet? Basically all functions after that should just wait for the function that waits for the call to finish right? Well this will freeze our web page, and we don't want our page frozen on every call we make. That is why javascript delegates waiting tasks to the browser. 

1. **JavaScript engine** 
	1.1 **Memory Heap** - A region in memory used for storing values and other types of data in an ordered fashion
	1.2 **Call Stack** - A structure where our functions are queued for running. It fills with tasks and it executes them in order LIFO ( Last In First Out )
2. **Browser APIs** - The browser APIs that help javascript run smoothly and without clogging. 
3.  **Even Queue** - A queue that holds the results of the browsers APIs ( callbacks ) until they are added to the stack and executed. The order of giving out these callbacks is FIFO ( First In First Out )
4. **Event Loop** - A mechanism that checks if the stack is empty, and when it is pushes a task ( callback ) from the event queue on to the stack to be executed


## Working with the browser
In the browser there are a lot of mechanisms for running our code smoothly. As we said there is a stack in the engine for running our code. There are also some helper APIs or services that help our code. These are the DOM, that help us map objects from our HTML, an HTTP client for making AJAX calls, services for waiting some ammount of time or repeating some code in some interval etc. When a task that needs waiting comes to the stack like an AJAX call the stack throws it out of the stack in to the browser service. There it waits for a response and our stack can continue making calls. When it is done it throws the code that needs to be executed from the AJAX call in a queue called task queue or callback queue.  A mechanism called the event loop stands between the stack where our code is executed and it's job is to check if the queue is empty and when it is, to put the code that is next in line from the callback queue in to the stack so it can be executed. After our stack is empty ( all tasks are executed in the stack ) our event loop gets the AJAX code and puts it in the stack so it can be executed. 
#### setTimeout
Will execute a function passed as an argument when a given time passes. The second parameter of this function is how many milliseconds do we actually want to wait, or delay some code. 
```javascript
	// with annon function
	setTimeout(function(){ console.log("This happens later!"}, 2000);
	// with arrow function
	setTimeout(()=>  console.log("This happens later!"), 2000);
```
#### setInterval
Will execute a function passed as an argument when a given time passes. The second parameter of this function is how many milliseconds do we actually want to wait, or delay some code. 
```javascript
	setTimeout(()=>  console.log("This happens every two seconds!"), 2000)
```

#### a simple piece of code
```javascript
let  cb1  = () =>  console.log("cb1");

console.log("Hi");
setTimeout(cb1 , 1000);
console.log("Bye");
```
**Result: **
Hi
Bye
cb1

#### behind the scenes
![behind the scenes](https://cdn-images-1.medium.com/max/1000/1*TozSrkk92l8ho6d8JxqF_w.gif)