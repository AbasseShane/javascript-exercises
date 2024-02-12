const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit-32)*(5/9))
  let celsiusRounded = parseFloat(celsius.toFixed(1))
  return celsiusRounded
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = parseFloat((celsius*(9/5)+32).toFixed(1))
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
