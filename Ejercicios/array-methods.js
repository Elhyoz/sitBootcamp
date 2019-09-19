/* 
    Map nos permite recorrer un array y aplicarle una función a cada elemento de dicho array. Nos retorna
    un nuevo array
 */

let numbers = [1, 5, 10, 15];
let x, y;
let doubles = numbers.map(function(x) {
   return x * 2;
});

doubles
console.log("===========================================");
/* filter nos permite filtrar el array según las condiciones dadas y lo retorna en un nuevo array */
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.includes('a'));

result

console.log("============================================");
/* Reduce nos permite ejecutar una función callback reductora para cada elemento del array, nos va a regresar un único valor */
let data = numbers.reduce(function(x, y){
        return x+y;
});
data
console.log("============================================");
