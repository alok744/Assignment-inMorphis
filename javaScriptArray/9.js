function swapCase(input) {
    let swapped = '';
    
    for (let char of input) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    
    return swapped;
}

// Example usage:
const inputString = 'The Quick Brown Fox';
const outputString = swapCase(inputString);
console.log(outputString);  // Output: 'tHE qUICK bROWN fOX'
