#Syntax parser
Se va ejecutando conforme se ejecuta el código tras el hoisting
Outer Environment 


#Ciclo de vida de los componentes en polymer
    1. Created: Se ha creado un ejemplar del custom element, es decir, el navegador ha creado un elemento que
    es un custom element de Web Components

    2. Attached: El elemento se ha insertado dentro del documento DOM

    3. Detached: El elemento se ha retirado del DOM.
    
    4. atributeChanged: un atributo del componente se ha añadido, quitado o su valor ha cambiado.

    5. Ready: Este método es exclusivo de polymer y no existe el estándar. Se ejecuta cuando se ha terminado de crear e inicializar todo el DOM local de un elemento, o sea, todo el HTML que contiene el TEMPLATE

#Mecanismos para observar cambios en variables:
    - observers
    - computed
    - data binding two way


#Forma correcta de eliminar un elemento de un array.
    - splice: sustituye un miembro del array

#Métods de array en polymer
push, pop, shift, unshift, splice

#**El observer se ejecuta de manera síncrona**

#Manera correcta de notificar un cambio de polymer
 -**NotifyPath: Syntaxis -> notifyPath('mi-path-cambiado')**

¿Qué evento se lanza al modificar una propiedad? 
 'propertie-changed' **Si está en camelcase lo pasa a dashcase**

Filter va en el dom-repeat

El tipo de dato que retorna null es Object

Bajo acoplamiento: cada uno tiene su propio módulo, pero comparte información
