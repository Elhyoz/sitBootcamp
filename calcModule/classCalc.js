export class Calculator  {
    constructor (){
        this.add = (a,b) => a+b;
        this.substraction = (a, b)=> a-b;
        this.multiplication = (a, b) => a*b;
        this.division = (a, b) => a/b; 
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


