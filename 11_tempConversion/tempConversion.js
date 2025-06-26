const convertToCelsius = function(fahrenheit) {
  const celcius =(fahrenheit-32) * 5/9
  return +celcius.toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * (9/5) + 32
  return +fahrenheit.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
