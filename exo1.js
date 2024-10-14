const celcius = prompt("Celcius a convertir en Fahrenheit ");
const fahr = celcius * 9 / 5 + 32
console.log(fahr)

// Ou

function convertirCelsiusEnFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  console.log(convertirCelsiusEnFahrenheit(0)); 
  console.log(convertirCelsiusEnFahrenheit(25)); 
  