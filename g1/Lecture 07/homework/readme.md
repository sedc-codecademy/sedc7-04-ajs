# Complicated homework

For this homework we will simulate a client / server application.
The server will be done with a `json-server` database, so the task is to set it up and run it.

The client will then connect to the server, get information and display them. You will only need to submit the client solution.

## Server

In order to have the server functional, you need to first install `node` on your machine (version 10 is ok).  
Then you will need to globally install [json-server](https://github.com/typicode/json-server) using the command (from the command line)

`npm install -g json-server`

Once it is successfully installed, you will need to run it to use the database. To do that, you should switch to the `server` folder in the command propmt (the command to change the directory is `cd`). Once you are in the server folder, you should run the command

`json-server .\authors-db.json`

and you should recieve this output:

```
\{^_^}/ hi!

  Loading .\authors-db.json
  Loading routes.json
  Done

  Resources
  http://localhost:3000/authors

  Other routes
  /authors/filter/:start -> /authors?name_like=^:start

  Home
  http://localhost:3000

```

To verify that it is working you can access it's homepage at [http://localhost:3000](http://localhost:3000) or use the authors generated API's to access the data. You can:
- access a list of all the authors using the [http://localhost:3000/authors](http://localhost:3000/authors) URL, 
- access a specific author using their ID, e.g. access all the data for Robert Heinlein (ID 7), using the URL [http://localhost:3000/authors/7](http://localhost:3000/authors/7), and access all data for N. K. Jemisin (ID 1295) using the URL [http://localhost:3000/authors/1295](http://localhost:3000/authors/1295)
- access a list of authors whose name starts with a value, e.g. access all data for authors called "Jack" using the URL [http://localhost:3000/authors/filter/Isaac](http://localhost:3000/authors/filter/Isaac)

## Client

For the client you need to

- Generate a list of buttons for all the letters of the English Alphabet.
- If no button is selected, there should be an empty grid bellow the list of buttons.
- If a button is selected, the grid should display all the authors whose name starts with the selected letter. You should display the following properties
    - Id of the author
    - Name of the author
    - Number of books of the author
    - Whether we have data about the books or not
- Above or bellow the grid, we need to have the following information: 
    - what letter is selected, 
    - how many authors are displayed.
- Have an extra button that will clear the selection and display an empty grid

## Additional

- Try to break down the problem into smaller tasks, like "generating letter buttons", "clearing the grid", "getting data for the letter A" and so on.
- Don't hesitate to Google for a solution to the specified task
- Don't hesitate to contact Weko or Trajan about details

## Due date

- The homework should be done by 31.01.2019. If you are done earlier, don't worry, there are bonuses available on request :)

