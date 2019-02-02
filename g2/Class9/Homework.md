# Homework
## Create a web page for loging in and registerint
The webpage initially should have two buttons: Log in and Register
* Register - Opens a form and when the form is filled a button should be clicked for the student to be registered. A Student object should be created from the form inputs and added to the database. If there is already a student by that username, don't register the student, show an error.
* Log in - Two fields, username and password and a button login should show. When the user clicks login it should check if a user exists in the database with that username and then check if the password is the same. After the user and password is validated, a new view should show with information about the user ( if the user has address it should also show the address info, if not it should say that the user doesn't have an address yet).

Under the information by the user there should be a button called Add Address and in the top there should be a logout button
* Add Address - When the student clicks on this button a form should show for entering information about an address. When saved it should merge the address with the student. Now in the view with the student info it should show the address information. 
* Log out - Will logout the user and the initial view with the register and log in should appear, so that another user can login.

**NOTE:** USE THE SERVICE OBJECT FROM THE EXERCISE FOR EVERYTHING YOU NEED
Ex: Login method, currentlyLoggedInStudent etc.
