function areSameType(value1, value2) {
    return typeof value1 === typeof value2;
}

// Test Data
console.log(areSameType(123, 456));           // true (both are numbers)
console.log(areSameType('abc', 'def'));       // true (both are strings)
console.log(areSameType({}, []));              // false (object and array)
console.log(areSameType(null, undefined));     // false (null and undefined)
