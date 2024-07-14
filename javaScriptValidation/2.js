function isError(value) {
    return value instanceof Error;
}

// Test Data
console.log(isError(new Error("This is an error"))); // true
console.log(isError("This is a string"));            // false
console.log(isError(404));                            // false
