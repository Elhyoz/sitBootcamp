var o = {
    prop: 37,
    name: "Pedrito",
    lastName: "Sola",
    
    f: function() {
        
        return this.name + ' ' + this.lastName;
    }
  };
  
  console.log(o.f()); // logs fullname

//Ejemplo  #2 

console.log("==========================================================");

var o = {
    age: 45, 
    name: "Ameyalli",
    lastName: "Escalona",
};

function independient(){
    return this.name + " " + this.lastName;
}

o.func = independient;

console.log(o.func()); //logs FullName

//Ejemlo #3

console.log("==========================================================");

o.b = {g: independient, lastName: 42, name: "Juancho"};
console.log(o.b.g()); // logs Juancho 42
