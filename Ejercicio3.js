

//Ejercicio 3
let user3 = {
    name: "John",
};

let admin = {
    name: "Admin",
};

admin.f = function sayHi(){
    alert(this.name);
}
admin.f(); 

user3.f = function sayHi(){
    alert(this.name);
}

user3.f();
