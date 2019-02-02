# Async/await
Looking now at promises we can safely say that callbacks are not that fun any more. We can do the same but quicker and more organised with promises. Still there is another, we can say even better way of dealing with the asynchronous behaviour of our code in JavaScript. It is the async/await feature and it works on top of the feature discussed previously, promises. Basically, we create a **function** and we write **async** before it. This makes the function asynchronous, meaning that some code inside of it can wait until it is ready without blocking the whole execution stack. If we want to wait on some function ( that returns promise, because it works with promises ) we only write **await** before the function call that has a result promise. Then the function waits on that result and then continues with the code inside that function. The code outside of the function is executed as normal ( doesn't wait for the await inside the async function ).

#### A simple fetch call with async/await
```javascript
async function getAsyncData(){
    let response = await fetch("https://swapi.co/api/people/1");
    let data = await response.json();
    console.log(data);
}
getAsyncData();
```
The word “async” before a function means one simple thing: a function always returns a promise. Even if the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.

For instance, the code above returns a resolved promise with the result of 1, let’s test it:
```javascript
async function asyncFunction() {
  return 1;
}
asyncFunction().then(alert); // 1
```

So by this we can say that whenever we make an async function, we are sure that our function will return a promise, even if we return something else, for example a primitiv value, it will wrap it into a promise. Also when making a function async, we can explicitly return a promise like the following example:

```javascript
async function asyncFunction() {
  return Promise.resolve(1);
}
asyncFunction().then(alert); // It will return an alert(1)
```
An important thing to remember is that async and await goes in pair. People who are just starting to use await tend to forget the fact that we can’t use await in top-level code. For example, this will not work:

```javascript
// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
```
So we need to have a wrapping async function for the code that awaits. Just as in the example above.


