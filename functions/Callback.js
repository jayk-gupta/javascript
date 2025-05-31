const oneWord = function (s) {
  return s.replace(/ \s+/g,"").toLowerCase();
};

const upperFirstWord = function (s) {
  const [first, ...others] = s.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
// Here we are creating a abstraction 
const transformer = function (str, fn) {
  console.log(fn.name);
  console.log(fn(str));
};

// function("",callback function)
transformer("hello my name is jay", upperFirstWord);
transformer("  a    b  ", oneWord);
