console.log(this.document === document); // true

// En los navegadores web, el objeto window también es un objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
console.log(this.a);


function f1(){
    return this;
  }
  
  f1() === window; // objeto global
  


function f2(){
    "use strict"; // consultar modo estricto
    return this;
  }
  
f2() === undefined;


  
  


