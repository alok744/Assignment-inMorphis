function countWords(str) {
    str = str.trim();
    str = str.replace(/\s{2,}/g, ' ');
    str = str.replace(/^\s*\n/gm, '');
    return str ? str.split(' ').length : 0;
}

// Example usage:
let inputString = "   Hello,   World!   This is a test.   ";
console.log(`Number of words: ${countWords(inputString)}`);

inputString = "   Leading and trailing spaces\n with new lines.   ";
console.log(`Number of words: ${countWords(inputString)}`);
