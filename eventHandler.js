// When called as a listener, turns the related element blue
function bluify(e) {
    // Always true
    console.log(this === e.currentTarget);
    // true when currentTarget and target are the same object
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
  }
  
  // Get a list of every element in the document
  var elements = document.getElementsByTagName('*');
  
  // Add bluify as a click listener so when the
  // element is clicked on, it turns blue
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', bluify, false);
  }