function isObject(value) {
    return value !== null && typeof value === 'object';
}

// Test Data
console.log(isObject({}));          // true
console.log(isObject(null));        // false
console.log(isObject([]));          // true
console.log(isObject('string'));    // false
