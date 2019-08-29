function factorial(n) {
    if (n<=1) return 1;
    return  n * factorial(n-1);
}

function factorialLoop(n){
  var res = 1;
  for(var i=n; i>=1; i--){
    res = res * i;
  }
  return res;
}

function suma(num){
    'use strict';
    let result=0;
    let i=1;
    while(num !== 0) {
        result = result + num;
        num--;
    }
    return result;
}
console.log(suma(4));




