function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Test Data
console.log(isNumber(123));         // true
console.log(isNumber(NaN));         // false
console.log(isNumber('123'));       // false
console.log(isNumber(undefined));   // false
