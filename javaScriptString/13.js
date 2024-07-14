function repeat(str, n = 1) {
    let result = '';
    
    for (let i = 0; i < n; i++) {
        result += str; // Concatenate the string n times
    }
    
    return result; // Return the concatenated string
}

// Test Data
console.log(repeat('Ha!'));      // "Ha!"
console.log(repeat('Ha!', 2));   // "Ha!Ha!"
console.log(repeat('Ha!', 3));   // "Ha!Ha!Ha!"
