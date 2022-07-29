const kelvin = 293
// the forecast today is 293 Kelvin

var celsius = kelvin - 273
// Celsius is 273 degrees less than Kelvin

var fahrenheit = celsius * (9/5) + 32
// to calculate Fahrenheit

fahrenheit = Math.floor(fahrenheit);
// to round down Fahrenheit calculation to nearest degree 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

var newtonTemp = celsius * (33/100)
newtonTemp = Math.floor(newtonTemp);

console.log(`The temperature is ${newtonTemp} degrees Newton`);
