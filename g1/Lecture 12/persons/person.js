class Person {
    constructor (id, firstName, lastName){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `#${this.id}: ${this.firstName} ${this.lastName}`;
    }
}