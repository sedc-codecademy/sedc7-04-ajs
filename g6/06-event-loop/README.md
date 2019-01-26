# Class 6) Javascript Event loop and asyncronicity
---
Javascript is a single threaded language, which means all the code gets executed in a single thread, this means that there is only one stack or queue for code or tasks to be executed and they are beeing executed one by one. When we execute some functions they go to the top of the stack, they get executed and go out of the stack one by one. But what if one of those function is waiting for some response from the internet? Basically all functions after that should just wait for the function that waits for the call to finish right? Well this will freeze our web page, and we don't want our page frozen on every call we make. 
##### The event loop
![](./img/call_stack.png)

- **Heap** - Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory remember when we talked about reference types? Where they are kept here and our variables point to this location
- **Stack** - This represents the single thread provided for JavaScript code execution. Function calls form a stack of frames. How the stack works is pretty simple, it gets filled up (stacked) at the top with all the consecutive function calls and they start being exectued one by one and thrown out until the stack is clear and ready to get the next function from the queue
- **Queue** A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message. At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use. The processing of functions continues until the stack is once again empty; then the event loop will process the next message in the queue (if there is one).




```JavaScript
function main(){
  console.log('A');
  setTimeout(
    function display(){ console.log('B'); }
  , 1000);
	console.log('C');
}
main();
//	Output
//	A
//	C
//  B
```

# The Callback function (again, yeees I knooow)

Callback functions are functions that are executed inside of other functions ( usually after the execution of the other, parent function ). Since javascript executes line by line and throws functions out of the stack when we have to wait for them, it is easy to see that sometimes we would need a system that actually executes the code in our defined order. This is where callbacks come to the picture. If we want to be sure that a function is executed after another, then we just pass that function as an argument to the first one. That way when the first one completes inside of it we call the second one. This way we keep the order of execution.

```JavaScript
$.ajax({
        url,
        type: 'GET',
        success: data => { // le callback
            planets = data.results;
            next = data.next;
            previous = data.previous
            console.log('2)', data)
            showPlanets(planets)
        },
        error: err => { console.log(`something bad happened`, err) } // le callback
    })
```