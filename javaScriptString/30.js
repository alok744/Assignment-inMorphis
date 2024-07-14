function string_endsWith(str, suffix) {
    // Check if the suffix is an empty string
    if (suffix === '') {
        return false;
    }
    return str.endsWith(suffix);
}

// Test Data
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); // true
console.log(string_endsWith('JS PHP PYTHON', ''));      // false
