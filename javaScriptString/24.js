function truncate(str, numWords) {
    const words = str.split(' ');
    return words.slice(0, numWords).join(' ');
}

// Test Data
console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); // Output: "The quick brown fox"
