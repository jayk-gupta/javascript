// var is the traditional way of declaring variables in JavaScript, and it has function scope or global scope.

// Variables declared with var inside a function are accessible throughout the function, but not outside of it.

// Variables declared with var outside of any function are global variables and can be accessed from anywhere in the code.

// If you declare the same variable name multiple times with var, it will overwrite the previous value.

function fn() {
  var x = 1;
  if (true) var y = 2;
  console.log(x);
  console.log(y);
}

fn();