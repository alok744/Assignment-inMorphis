function subStrAfterChars(str, char, afterChar) {
    const charIndex = str.indexOf(char);
    if (charIndex === -1) {
        return str; // If the specified character is not found, return the original string
    }
    
    const substring = str.substring(charIndex + 1); // Get the substring after the character
    const afterCharIndex = substring.indexOf(afterChar);
    
    if (afterCharIndex === -1) {
        return substring; // If the specified character after is not found, return the substring
    }
    
    return substring.substring(afterCharIndex + 1); // Return substring after the afterChar
}

// Test Data
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); // Output: "w3resource"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); // Output: "xercises"
