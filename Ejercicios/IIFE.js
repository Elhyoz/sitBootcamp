function a(){
    return 1;
}

(function f(f){
    console.log(typeof f());
})(a);

let x = '4' + 4 +5;
let y = 4 + 4 +'5';
console.log(x, " ", y);


