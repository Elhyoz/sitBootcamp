// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // El valor de This depende de cómo es llamada la función
}

whatsThis();          // 'Global'
console.log(whatsThis());


whatsThis.call(obj);  // 'Custom'
console.log(whatsThis.call(obj));


whatsThis.apply(obj); // 'Custom'
console.log(whatsThis.apply(obj));


console.log("==========================================");

//Ejemplo 2
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34



