//Ejercicio 4
name = "Pancho";
let user = {
    name: "John",
    go: function() { 
        var self = this; 
        return function() {
            console.log(self.name);
        }
     },
};

(user.go)()();

/*(function run(u){ 
    arguments[0].go();
})(user); //Imprime el nombre 'John'*/