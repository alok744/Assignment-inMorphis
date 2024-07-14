function search_word(str, word) {
    // Convert the string to lowercase for case-insensitive search
    const lowerStr = str.toLowerCase();
    const lowerWord = word.toLowerCase();
    
    // Use a regular expression to find all occurrences of the word
    const regex = new RegExp(`\\b${lowerWord}\\b`, 'g');
    const matches = lowerStr.match(regex);
    
    // Count occurrences
    const count = matches ? matches.length : 0;
    
    return `'${word}' was found ${count} times.`;
}

// Test data
console.log(search_word('The quick brown fox', 'fox')); // Output: "'fox' was found 1 times."
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));   // Output: "'aa' was found 2 times."
