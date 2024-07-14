function isBoolean(value) {
    return typeof value === 'boolean';
}

// Test Data
console.log(isBoolean(true));   // true
console.log(isBoolean(false));  // true
console.log(isBoolean(0));      // false
console.log(isBoolean('true'));  // false
