function count(str, subStr, caseSensitive = true) {
    if (!caseSensitive) {
        str = str.toLowerCase();
        subStr = subStr.toLowerCase();
    }

    let count = 0;
    let index = str.indexOf(subStr);
    
    while (index !== -1) {
        count++;
        index = str.indexOf(subStr, index + subStr.length);
    }
    
    return count;
}

// Test Data
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // Output: 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false)); // Output: 1
