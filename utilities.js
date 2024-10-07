// utilities.js

// First Function: Welcome message
export function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function: Celsius to Fahrenheit conversion
export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Third Function: Calculate factorial of a number
export function performMathOperation(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// Fourth Function: Reverses a given string (Advanced Function)
export function advancedFunction(inputString) {
    return inputString.split('').reverse().join('');
}
