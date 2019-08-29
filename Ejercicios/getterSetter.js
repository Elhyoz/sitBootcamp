function modulus(){
    return Math.sqrt(this.re * this.re + this.im * this.im);
  }
  
  var o = {
    re: 1,
    im: -1,
    get phase(){
      return Math.atan2(this.im, this.re);
    }
  };
  
  Object.defineProperty(o, 'modulus', {get: modulus, enumerable:true, configurable:true});
  
  console.log(o.phase, o.modulus); // logs -0.78 1.4142