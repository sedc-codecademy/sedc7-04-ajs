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