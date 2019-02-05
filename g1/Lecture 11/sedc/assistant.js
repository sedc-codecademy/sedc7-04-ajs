const Assistant = function (firstName, lastName, availability = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.availability = availability;
}

Assistant.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}