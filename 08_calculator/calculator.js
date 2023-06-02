const add = function(a, b) {
  return (a + b); 
	
};

const subtract = function(a, b) {
  return (a -b); 
	
};

const sum = function(array) {
  let total = 0; 
  array.forEach(item => {
    total += item; 
  }); 
  return total; 
	
};

const multiply = function(array) {
  let total = 1; 
  array.forEach(item => {
    total *= item; 
  })
return total; 
};

const power = function(a, b) {
  return Math.pow(a, b); 
	
};

const factorial = function(num) {
  if (num < 0)
  return -1; 
  else if (num == 0) 
  return 1; 
  else {
    return (num * factorial(num - 1)); 
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
