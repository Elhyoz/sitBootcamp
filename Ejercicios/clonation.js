let x = ['hola', 'Ameyalli', {a : 'b'}];
let y = {
    type: 'object',
    array: [1, 0],
    edades: [23, 45, 67, 10],
};

console.log(typeof x === typeof y);
let parsedX = x.toString(x);
console.log(typeof parsedX === typeof y);

let copyX = x;
copyX[0] = 'adios';
console.log(x);  // Clonación superficial

let deepY = { // Clonacion profunda
    ...y,
};

deepY.type = 'hola';
console.log(deepY);
console.log(y); 
console.log(y);

let deepX = [
    ...x,
];

console.log(deepX);

deepX[0] = 'bazinga!';
deepX.a = "bazinga!"
deepX[1] = 'Guadalupe';
deepX[2].a = 'z';

console.log(x);
console.log(deepX);

