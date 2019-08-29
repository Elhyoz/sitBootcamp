var o = {
    f:function(){ 
        return this.a + this.b; 
    }
};
var p = Object.create(o);
p.a = "Qué onda ";
p.b = "Qué pez";

console.log(p.f()); // 5