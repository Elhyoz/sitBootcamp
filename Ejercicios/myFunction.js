'use strict';
// let x  = ['b' + 'a' + + 'a' + 'a'];
// let y = [{name: 'juancho'}, 'hola', 'adios'];

/*
    Ejercicio 2.
    Retorna el valor de bar en caso de ser cierta la comparación
    en caso que no, retorna una función
*/ 
// let bar = (a) => a*2;
// let foo = (function(){
//     let a = Math.abs(12.5);
//     return function(){
//         if ( a >= Math.PI * 2){
//             return bar(Math.PI);
//         }else{
//             return () => Math.PI*2;
//         }
//     }
// })();
// console.log(foo());

/**
 * Ejercicio 3
 * Destructuración de un objeto y un array de objetos, 
 * la salida es undefined para el array de objetos puesto que
 * solo accede al primer nivel de estos.
 * En el caso del objeto puede acceder a lo que nos interesa
 * que imprima
 */
// let bar = [
//     {id: 1, name: "Leanne Graham", username: "Bret"},
//     {id: 2, name: "Ervin Howell", username: "Antonette"},
// ];

// let foo = {
//     userId: 1,
//     id: 1, 
//     title: "Dev",
//     completed: false,
// };

// let {name} = bar;
// let {title} = foo;

// console.log(name);
// console.log(title);

/**
 * Ejercicio 4
 * Arguments. Esta función mandará una alerta que imprime undefined SI SE ESTÁ EN MODO ESTRICTO
 * ya que arguments no apunta a la misma dirección de memoria que el parámetro
 */
// function foo(a, b){
//     arguments[1] = 2;
//     alert(b);
// }
// foo(1);


/**
 * Ejercicio 5
 * Eval. Esta función nos dará un 30 ya que el eval, evalúa una expresión a manera de string y retorna el valor
 * 
 */

// var x=5;
// var y=6;
// var res=eval('x*y');
// document.write(res);

/**
 * Ejercicio 6
 * Proceso de ejecución de JS.  En este ejemplo vemos claramente el proceso de hoisting y ejecución
 * nos retornará el typeof función ya que por hoisting foo es una función
 */

//  function bar(){
//      return foo;
//      foo=10;
//      function foo(){}
//     var foo='11';
// }
// alert(typeof bar());

/**
 * Ejercicio 7
 * Context execution. En el segmento del try nos dará un error ya que en el contexto en que se encuentra go
 * no existe X. Sin embargo en el alert fuera del try-catch, nos retornará 1 ya que estamos accediendo al contexto
 * y puede utilizar la X de baz.
*/

// var x = 3;
// var foo = {
//     x: 2,
//     baz: {
//         x:1,
//         bar: function(){
//             return this.x;
//         }
//     }
// }
// var go = foo.baz.bar;
// try{
//     alert(go());
// }catch(e){
//     console.log(e);
// }
// alert(foo.baz.bar());

/**
 * Ejercicio 8
*/

// var bar=1, foo={};
// foo: {
//     bar: 2;
//     baz: bar++;
// }
// console.log(foo.baz + foo.bar + bar);


/**
 * Ejercicio 9
 * Este ejercicio nos va a retornar una S, dado que substring nos retorna una subcadena de un objeto string
 * empezando por el index 4 y terminando en el 5, SIN tomar en cuenta el valor del quinto index
 */

// var a = "GeeksForGeeks";
// var result = a.substring(4, 5);
// alert(result);

/**
 * Ejercicio 10
 *  En este ejercicio encontraremos un error ya que se intenta acceder a la propiedad name de un booleano
 * lo siguiente que imprime es false por comprar dos names.
 * Vemos el cómo funcionan los comparadores y la negación, vemos que se puede negar un false lo que retorna
 * true
 */

// var miPersonaFavorita = {
//     name: 'Atalía',
//     apellido: 'Guzmán'
// };

// const miPersonajeFavorito = {
//     name: 'Atalía',
//     apellido: 'Guzmán'
// };

// let miAmigoFavorito = {
//     name: 'Mary',
//     apellido: 'Juarez'
// };

// miAmigoFavorito = miPersonaFavorita == miPersonajeFavorito;
// miPersonaFavorita.name = 'Ana';
// try{
//     miAmigoFavorito.name = 'Mary';
// }catch(e){
//     console.log('Error: ', e);
// }
// miPersonajeFavorito.name = 'Mary';

// console.log(!!!miPersonaFavorita===miAmigoFavorito);
// console.log(miPersonajeFavorito.name==miPersonaFavorita.name);

/**
 * Ejercicio 11
 */
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr.foo = 'c';
console.log(arr.length);
arr.forEach(item => console.log(item));

