function remove_non_word(str) {
    const words = [];
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Check if the character is a word character (alphanumeric or underscore)
        if (/\w/.test(char) || char === ' ') {
            words.push(char);
        } else {
            words.push(' '); // Replace non-word characters with a space
        }
    }
    
    // Join the characters and clean up extra spaces
    return words.join('').trim().replace(/\s+/g, ' '); 
}

// Test Data
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL')); // "PHP MySQL"
