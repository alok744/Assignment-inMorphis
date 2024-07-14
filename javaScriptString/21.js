function repeat_string(str, count = 1) {
    if (typeof str !== 'string' || typeof count !== 'number' || count <= 1) {
        return "Error in string or count.";
    }
    
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

// Test Data
console.log(repeat_string('a', 4)); // Output: "aaaa"
console.log(repeat_string('a'));     // Output: "Error in string or count."
