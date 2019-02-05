const Lecturer = function (firstName, lastName, knowledge = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.knowledge = knowledge;
}

Lecturer.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Lecturer.prototype.knowsSubject = function(subject) {
    return this.knowledge.includes(subject.name);
}