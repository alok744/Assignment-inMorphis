function isNaNValue(value) {
    return typeof value === 'number' && isNaN(value);
}

// Test Data
console.log(isNaNValue(NaN));      // true
console.log(isNaNValue(123));      // false
console.log(isNaNValue('NaN'));    // false
console.log(isNaNValue(undefined)); // false
