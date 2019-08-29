let edades = [{
        name: 'Aldo',
        edad: 23
    },

    {
        name: "Ameyalli",
        edad: 22,
    },

    {
        name: "José",
        edad: 45,
    },
]

// Suma edades

console.log((edades.map(element => element.edad)).reduce((x, y) => x + y));

const methods = [{
        method: 'filter',
        easyToUse: 'easy',
    },
    {
        method: 'map',
        easyToUse: 'easy',
    },
    {
        method: 'reduce',
        easyToUse: 'hard',
    },
    {
        method: 'find',
        easyToUse: 'easy',
    },
    {
        method: 'every',
        easyToUse: 'easy',
    },
];

methods.push({method: 'some', easyToUse: 'easy'})

console.log(methods.filter(element => element.method == "some"));

let easyMethods = methods.filter(element => element.easyToUse == "easy");

console.log(easyMethods);

let hardMethodsDeleted = methods.filter(element => element.easyToUse != "hard");
console.log(hardMethodsDeleted);

let toTrueBoolean = methods.map(element => {
    if(element.easyToUse === "easy"){  
        element.easyToUse = 'true';
        return element
    }
});
console.log(toTrueBoolean);º

let toFalseBoolean = methods.map(element => {
    if(element.easyToUse === "hard"){
        element.easyToUse = 'false';
        return element
    }
});
console.log(toFalseBoolean);

let edades = [
    {name: 'Mario', edad: 37},
    {name: 'Alfredo', edad: 24},
    {name: 'Ricardo', edad: 21},
    {name: 'Alejandro', edad: 23},
];

let edadesID = edades.map(function(element,index){
    return {
        id: index,
        ...element
        };
});


let includeArray = edades.map(element => { return element.edad }).includes(23)
includeArray












