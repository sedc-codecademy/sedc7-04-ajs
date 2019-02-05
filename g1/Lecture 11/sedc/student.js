const Student = function (id, firstName, lastName, group = "") {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
}

Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Student.prototype.getStudentInfo = function() {
    return `#${this.id} ${this.getFullName()} (${this.group})`;
}