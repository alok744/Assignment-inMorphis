function isChar(value) {
    return typeof value === 'string' && value.length === 1;
}

// Test Data
console.log(isChar('a'));       // true (it's a single character)
console.log(isChar(''));        // false (empty string is not a char)
console.log(isChar('abc'));     // false (more than one character)
console.log(isChar(1));         // false (number is not a char)
