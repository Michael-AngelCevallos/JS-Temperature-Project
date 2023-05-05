// const variable
const kelvin = 0;
// converts kelvin to celsius
const celsius = kelvin - 273;
console.log(celsius);
// convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);
// get rid of decimal
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
const newton = celsius * (33/100);
console.log(Math.floor(newton));
console.log(`The temperature in Newton is ${Math.floor(newton)}.`)