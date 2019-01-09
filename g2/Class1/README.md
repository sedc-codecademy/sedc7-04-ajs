# 1. AJAX
## Getting things from the Internet
There are a lot of services and sites on the Internet that allow us to use some data or information that they hold such as the weather, sport scores, statistics about the environment, movies, music etc. In order to get those information we have to send a request for them first to the site or service that offers the data in the first place. If we are allowed to make that request we get a response with a package of the data we requested for in a format called JSON. If we are not allowed we get a response but with a status that describes why we didn't get our data. Through these requests we communicate with this sites and services whether we want to get something or add something. 

## What is JSON
JSON is one of the most commonly used format in which we send or get packages to the Internet. It's actually a simple text file that contains structured information. When you see the structure it is very similar to a JavaScript object. It consists of keys ( in JS Objects, properties ) and values. The values can be of any type such as numbers, strings boolean, array or another object. 

##### A JavaScript Object
```javascript
let someObject = {
  trainer: "Dragan Gelevski",
  assistant: "Dejan Blazeski",
  students: [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg"
  ],
  academy: "Code"
};
```
##### A json file
```json
{
  "trainer": "Dragan Gelevski",
  "assistant": "Dejan Blazeski",
  "students": [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg"
  ],
  "academy": "Code"
}
```
As we can see the two are very similar. But when we get JSON file like the one above from some request that we made, we can't actually use it right away. Like we said it is a simple text file, and thus in JavaScript it is just a simple string. In order to get the information we need we first need to convert it to a JavaScript object. We do that with the **JSON.parse()** method.
```javascript
// Parse the json text file into JS object
let jsObject = JSON.parse(myJsonResponse);
// We can use it like object now
console.log(jsObject.trainer);
// We can create objects in to json strings as well
let newJson = JSON.stringify(jsObject);
```
So when the JSON string is parsed we can treat it like a normal object. We can also convert it back if we need to send it to the service or site back. If you are not sure that your JSON is valid you can use some of the online sites that validate JSON objects such as https://jsonlint.com/

## What is AJAX
Making a request is always done through an http protocol call. That is the standard call that we do when we request for any site to be opened. With this call we can also request things from sites and services on the Internet. But for every call we need to reload our page. To not reload the page every time we make a call, we use AJAX. AJAX is a technique with which we can send requests and get responses dynamically, without reloading everything. So how do we make a call with AJAX? 
1. Find a service or site that allows requests for some data
2. Get the URL address from that site or service where we will make the calls
3. Write AJAX call and code to handle the response in the JavaScript script
4. Write code as if you already have the response in a success method
5. Write code as if you didn't get what you desired in an error method

We can make the AJAX call using plain JavaScript, JQyery or with the new JavaScript feature called fetch.
##### Plain JavaScript
```javascript
let xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('The request succeeded!');
    let resultParsed = JSON.parse(xhr.response);
    console.log(resultParsed);
  } else {
    console.log('The request failed!');
    console.log(xhr.responseText);
  }
};
xhr.open('GET', 'https://raw.githubusercontent.com/Drakso/JavaScriptAjax/master/students3.json');
xhr.send();
````
##### JQuery
```javascript
$.ajax({
  url: "https://raw.githubusercontent.com/Drakso/JavaScriptAjax/master/students3.json",
  success: function (response) {
    console.log('The request succeeded!');
    let resultParsed = JSON.parse(response);
    console.log(resultParsed);
  }, 
  error: function(response){
    console.log('The request failed!');
    console.log(response.responseText);
  }
});
````
##### Fetch
```javascript
fetch('https://raw.githubusercontent.com/Drakso/JavaScriptAjax/master/students3.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
````