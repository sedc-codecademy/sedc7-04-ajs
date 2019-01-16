//Scope

//Two types

// Global scope

var thisIsGlobalVariable = 10;
//window.thisIsGlobalVariable = 10;

function calcVariables(a, b)
{
    return a + b + thisIsGlobalVariable;
}

//window.calcVariables = function(a, b){}

function executeCalc()
{
    calcVariables(5, 10);
}


// Local scope

function parentFunction(a, b)
{
    let c = 10;
    let that = this; //This is this of parentFunction()

    function calcResults(a, b, c)
    {
        return a + b + c + thisIsGlobalVariable;
    }

    function b(){

        let v;
        let that = this; //This is this of B()

        function c(){
            that.calcResults(1,2,3);
        }
    }

    console.log(calcResults());

    return calcResults();
}

console.log(c);

