const Student = function (id, firstName, lastName, group = "") {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
}

Student.prototype = new Person();

Student.prototype.getStudentInfo = function() {
    return `#${this.id} ${this.getFullName()} (${this.group})`;
}
