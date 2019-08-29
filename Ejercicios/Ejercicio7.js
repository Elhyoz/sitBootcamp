/* 3. Get access to global scope on getName subfunction */

this.name = 'global';
var module = {
  name: 'local',
  getName: function() { return this.name; }
};

console.log(module.getName.bind(this)()); // Should be global