function first(){

  // Simulate a code delay

  setTimeout( function(){

    console.log(1);

  }, 500 );

}

function second(){

  console.log(2);

}

first();

second();


//Simple callback

function doHomework(subject, callback) {

  alert(`Starting my ${subject} homework.`);
	
	let num = Math.ceil(Math.random() * 10);
  callback(num);

}


doHomework('math', function(time) {

  alert(`Finished my homework in ${time} sec`);

});


//Logger callback
var allUserData = [];


function logStuff (userData) {
	
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

function getInput (options, callback) {
    allUserData.push (options);
    callback (options);
}

getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
