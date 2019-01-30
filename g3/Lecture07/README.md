# EventLoop Synchronious code &#x1F34E;

## Basic Architecture 

![alt text](../img/img1.png)

    •	Heap - Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory

    •	Stack - This represents the single thread provided for JavaScript code execution. Function calls form a stack of frames.

    •	Browser or Web APIs are built into your web browser, and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. They are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code

In the background, the browser is actually using some complex lower-level code (e.g. C++) to communicate with the device’s GPS hardware (or whatever is available to determine position data), retrieve position data, and return it to the browser environment to use in your code. But again, this complexity is abstracted away from you by the API

## Asynchronous execution

```javascript
function main(){
  console.log('A');
  setTimeout(
    function display(){ console.log('B'); }
  ,0);
	console.log('C');
}
main();
//	Output
//	A
//	C
//  B

```