# Exercises
## Exercise
Create a constructor function for Student. Student should have
* firstName
* lastName
* userName
* password

Create a construcor function for Address. Address should have
* country
* city
* streetName
* streetNumber

Create an array called StudentsDatabase

Create a service object with these methods:
* StudentsDatabase - Array for keeping students
* register - accepts student object, checks if student name is already in the StudentDatabase and adds it to the StudentsDatabase array if there is no student by that name
* getStudentByName - accepts a name and finds and returns a student from the StudentDatabase
* insertStudentAddress - accepts an address and a student name and if the student name exists, it merges the address with the student object and replaces that object with the student
