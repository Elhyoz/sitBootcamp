class Poligono {
    constructor(height, width, name) {
        this.name = name;
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    //setter 
    set customGreetings(name) {
        console.log("Hi! I was created with a Class expression. My name is " + this.name );       
    }
    // Método
    calcArea() {
        return this.height * this.width;
    }

    sayHi(){
        console.log("Hi! I am a " + this.name);
    }

    myWidth() {
        console.log("The width of this polygon is: ", this.width);
    }
}

class Square extends Poligono {
    aboutMe(){
        console.log("The area of this square is: ", this.area);
    }
}

class Rectangle extends Poligono {
    coolHi(){
        alert("Sup! My name is " + this.name);
    }
}

let poly = new Poligono(0, 400, "Poly");
poly.sayHi();
poly.myWidth();
poly.customGreetings = "Poly";

let square = new Square(5, 5, "Square");
square.sayHi();
square.aboutMe();

let rectangle = new Rectangle(null, null, "Rectangle");
rectangle.coolHi();
