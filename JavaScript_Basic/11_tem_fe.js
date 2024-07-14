function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C is ${fahrenheit}°F`;
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return `${fahrenheit}°F is ${celsius}°C`;
}

console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(45)); 
