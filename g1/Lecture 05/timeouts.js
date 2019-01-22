const numbers = ["one","two", "three", "four", "five", "six"];

console.log("one");

setTimeout(() => {
    console.log("two");
    setTimeout(() => {
        console.log("three");
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log("six");
                }, 1000);                
                console.log("five");
            }, 1000);            
            console.log("four");
        }, 1000);        
    }, 1000);    
}, 1000);



function callCallback(success, failure) {
    const rand = Math.random() > 0.5;
    const callable = rand ? success : failure;

    setTimeout(() => {
        callable("Hello");
        if (rand) callable("Hello");
    }, 1000);
}


const happy = (message) => console.log(`Happy ${message}`);
const sad = (message) => console.log(`Sad ${message}`);

callCallback(happy, sad);
