function isPureJsonObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

// Test Data
console.log(isPureJsonObject({}));          // true (it's a pure JSON object)
console.log(isPureJsonObject(null));        // false (null is not an object)
console.log(isPureJsonObject([]));          // false (arrays are not pure JSON objects)
console.log(isPureJsonObject('string'));    // false (strings are not objects)
