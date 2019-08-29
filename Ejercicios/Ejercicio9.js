// 5. Convert and resolve the request using a callback

let result = 0;

function resolve(number){
    result = number + 3;
    console.log(result) // Should be 5;
}

function getValue (number, callback) {
  callback(number);
}

result = getValue(2, resolve);