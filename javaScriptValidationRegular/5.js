function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// Example usage:
let inputString = "   Hello, World!   ";
console.log(`Trimmed string: '${trimString(inputString)}'`);

inputString = "   Leading and trailing spaces   ";
console.log(`Trimmed string: '${trimString(inputString)}'`);
