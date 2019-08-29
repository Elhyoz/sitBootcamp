
var button = document.getElementById("button");
var timer = Date.now();

button.addEventListener("click", Clicker);

function Clicker(){
    console.log("Click!");
}

while(Date.now() - timer < 2000){
    console.log("Empieza cuenta atrás");
}

console.log("Fin");


