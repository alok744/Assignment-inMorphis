function capitalize(str) {
    if (str.length === 0) return str; // Return empty string if input is empty
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test Data
console.log(capitalize('js string exercises')); // "Js string exercises"
