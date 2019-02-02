const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x29,
    getFullName: function () {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    }
};

const hitByaBus = (person) => {
    console.log(this);
    return `${person.firstName} got hit by a bus`;
}

const jovan = {
	firstName: "Jovan",
	lastName: "Jovanovski"
}

// make this work (using weko's function)
const yourself = {};

yourself.getFullName = weko.getFullName;

console.log(yourself.getFullName());