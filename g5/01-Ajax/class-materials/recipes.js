//Variable that keeps the main url of the API
let apiEndPoint = 'https://jsonplaceholder.typicode.com/';
//Variable that will contain the API response (data) for further global usage
let apiResponse;

//jQuery function which executes itself when everything else is loaded on the page
$("document").ready(function(){
    
    //Call function to get ToDo's from API by using AJAX
    //getToDos();
	
	//Call function to get ToDo's from API by using Fetch
    fetchTodos();
});

//Get todos from API using AJAX
function getToDos()
{
    let uri = 'todos';

    $.ajax({
       url: apiEndPoint+uri ,
      //https://jsonplaceholder.typicode.com/todos
       method: "GET",
       dataType: "json",
       withCredentials: true,
       success: function(data)
       {
       		//Call printTodos function to display the result on screen by passing the data from API to the function
            printTodos(data);
            //Assign the API data to a global variable for further usage
            apiResponse = data;
       },
       error: function(e)
       {
           console.log(e);
       }
    });
}

//Function that will iterate over each todo item, and display it on screen
function printTodos(listOfTodos)
{
    //let a = 1,b =-11, c;
    //let d;
    
    for(let i = 0, ilen = listOfTodos.length; i < ilen; i++)
    {   //for(let i = 0; i < listOfTodos.length; i++)
    	
    	//jQuery selector that will match the UL element and it will append one new LI for every todo
        $("#existingTodos > ul").append(
            '<li>\
                <span>userId: '+listOfTodos[i].userId+'</span>\
                <span>title: '+listOfTodos[i].title+'</span>\
                <span class="complete-'+listOfTodos[i].completed+'">completed: '+listOfTodos[i].completed+'</span>\
             </li>');
    }
	
	//Bind click event to each span element that has class complete-true
    $("#existingTodos > ul > li > span.complete-true").on('click', function(e){
        //let status = $(this).text();
        $(this).removeClass('complete-true');
        $(this).addClass('complete-false');
        
        //Modify API data from previous AJAX call before sending them back to the server
        apiResponse[10].completed = false;
        console.log(apiResponse);
        //Make new AJAX call to store the updated data on the server
        updateServerData(apiResponse);
    });
	
	//Bind click event to each span element that has class complete-false
    $("#existingTodos > ul > li > span.complete-false").on('click', function(e){
        $(this).removeClass('complete-false');
        $(this).addClass('complete-true');
    });
}


//Function that will make new AJAX call to store the data on the server
function updateServerData(newdata)
{
    let uri = 'todos';

    $.ajax({
        url: apiEndPoint+uri,
        data: JSON.stringify(newdata),
        method: 'PUT',
        contentType: 'application/json',
        dataType: 'json',
        success: function(data)
        {
            alert('Success');
        },
        error: function(e)
        {
            alert('Error');
            console.log(e);
        }
    })
}

//Function that will make new Fetch call to the API and load the data
function fetchTodos()
{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(data){ //Once the data are loaded THEN is executed and data needs to be converted to JSON for further usage
        console.log(data);
        return data.json(); //Converts the data to JSON
        
    })
    .then(function(json){ //Once JSON data conversion is done, THEN is executed
        printTodos(json); //PrintTodos function is called to print the result on screen
    })
}