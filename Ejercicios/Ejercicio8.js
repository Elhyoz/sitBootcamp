// 4. Get access to global var to get the result

var a = 2;

(function IIFE() {
  var a = 3;
  var result = a + this.a; // Sum the local var a with global var a;
  
  console.log(result); // Should be 5;
})();