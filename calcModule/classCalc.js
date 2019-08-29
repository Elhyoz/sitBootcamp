export class Calculator  {
    constructor (){
        this.add = function(a,b) {
            return a+b;
        }
        this.substraction = function(a, b) {
            return a-b;
        };
        this.multiplication = function(a, b) { 
            return a*b;
        };
        this.division = function(a, b) { 
            return a/b; 
        };
    };
    adition(a, b){
        return this.add(a, b);
    }

    subtract(a, b){
        return this.substraction(a, b);
    }

    multiply(a, b){
        return this.multiplication(a, b);
    }

    divide(a, b){
        return this.division(a, b);
    }
};


