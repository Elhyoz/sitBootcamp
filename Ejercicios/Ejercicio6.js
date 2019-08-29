
let arrayTemas = ["this", "callback", "IIFE", "arguments"];

function temasVistos(temas, callback) {
    setTimeout(function() {
        console.log("Hola");
        callback(temas);
    }, 5000);

    
}

function CB(temas) {
    temas.forEach((tema) => {
        console.log(tema);
    });
}

temasVistos(arrayTemas, CB);

