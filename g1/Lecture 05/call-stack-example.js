function one() {
    two();
    two();
}

function two() {
    three();
    three();
}

function three() {
    four();
    four();
}

function four() {
    console.log("Hi");
}

one();