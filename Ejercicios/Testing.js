/*
  Notación antigua de las funciones
  function greeting (name) {
  alert('Hello ' + name);
}

*/

/*
  Manera nueva de escribir las funciones
  const greeting=(name) => {
    alert('Hello ' + name);
}
*/

/*
  Manera aun más nueva de escribir las funciones
*/ 
const greeting = (name) => alert('Hello ' + name)
  

 let processUserInput = (greeting) => { 
    let name = prompt('Please enter your name.');
    greeting(name);
  }
  
processUserInput(greeting);



