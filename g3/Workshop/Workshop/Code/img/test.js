throw new Error("Did not enter correct value!");

class Human{
    constructor(name){
        this.name = name;
    }
}

let trajche = new Human("Trajche");
// Checks if an object is an instance of some Class ( in the whole prototype chain )
trajche instanceof Human;
