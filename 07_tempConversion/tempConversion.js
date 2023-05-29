const convertToCelsius = function(degreesF) {
  return Math.round((degreesF - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(degreesC) {
  let roundedFahrenheit = Math.round(((degreesC * 1.8) + 32) * 10) / 10; 
  return roundedFahrenheit; 
};

convertToFahrenheit(73.2); 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
