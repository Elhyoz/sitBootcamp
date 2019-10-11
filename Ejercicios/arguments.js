'use strict';
var x = 3;
var foo = {
    x: 2,
    baz: {
        x:1,
        bar: function(){
            return this.x;
        }
    }
}

var go = foo.baz.bar;
try{
    alert(go());
}catch(e){
    console.log(e);
}
alert(foo.baz.bar());