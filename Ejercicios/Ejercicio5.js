//Ejercicio 5
function makeUser() {
    return {
        name: "Ame",
        ref: (obj) => {
            return this.name;
        },
    }
}

let user = makeUser();
alert(user.ref(user));


(function (obj){

    console.log("Hola mundo");
    
})(user.name);







