var test = {
    prop: 42,
    name: "Pedro",
    func: function() {
      return this.name;
    },
  };
  
  console.log(test.func());
  // expected output: 42
  