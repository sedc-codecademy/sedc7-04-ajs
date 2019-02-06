// initial state - no functions in objects

const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x29
};

const wekoFirst = "Wekoslav";
const wekoAge = 0x29;

const getFullName = (person) => {
    return `${person.firstName} ${person.lastName}`;
}

const hitByaBus = (person) => {
    return `${person.firstName} got hit by a bus`;
}
