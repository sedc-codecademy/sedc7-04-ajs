const Lecturer = function (firstName, lastName, knowledge = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.knowledge = knowledge;
}

Lecturer.prototype = new Person();

Lecturer.prototype.knowsSubject = function(subject) {
    return this.knowledge.includes(subject.name);
}

