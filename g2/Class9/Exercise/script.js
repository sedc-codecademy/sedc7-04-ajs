function Student(first, last, username, password){
    this.firstName = first;
    this.lastName = last;
    this.username = username;
    this.password = password;
}

function Address(country, city, street, number){
    this.country = country;
    this.city = city;
    this.streetName = street;
    this.streetNumber = number;
}

let studentService = {
    studentDB: [],
    register: function(inputStudent){
        let result = this.studentDB.filter(st => st.firstName === inputStudent.firstName);
        if(result.length === 0){
            this.studentDB.push(inputStudent);
        } else {
            console.log("There is already a student by that name")
        }
    }, 
    getStudentByName: function(name){
        let result = this.studentDB.filter(st => st.firstName === name);
        if(result.length === 0){
            return null;
        } else {
            return result[0];
        }
    },
    insertStudentAddress: function(name, address){
        let result = this.studentDB.filter(st => st.firstName === name);
        for (let i = 0; i < this.studentDB.length; i++) {
            if(result.length === 0){
                console.log("there is no student like that!");
            } else {
                this.studentDB[i] = Object.assign(result[0], address);
            }
        }
    }
}