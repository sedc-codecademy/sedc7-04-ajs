class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getMeaningOfLife() {
        return 42;
    }
}
// class Student extends Person {
//     id;
//     group;
//     constructor(id, firstName, lastName, group) {
//         super(firstName, lastName);
//         this.id = id;
//         this.group = group;
//     }
//     getStudentInfo() {
//         return `#${this.id} ${this.getFullName()} (${this.group})`;
//     }
// }
