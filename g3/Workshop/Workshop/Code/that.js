class Human{  
    constructor(name){
        this.name = name;
    }
    call(){/// OVA RABOTI
        let that = this;
        setTimeout(function(){
            console.log(`Hello there ${that.name}`);
        }, 1000);
    }
    call2(){/// OVA NE RABOTI
        setTimeout(function(){
            console.log(`Hello there ${this.name}`);
        }, 1000);
    }
}
let trajko = new Human("Trajko");
trajko.call();
trajko.call2();