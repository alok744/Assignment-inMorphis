function zeroFill(num, width, sign = '') {
    // Ensure the sign is either '+' or '-'
    if (sign !== '+' && sign !== '-') {
        sign = '';
    }

    // Convert number to string and pad with leading zeros
    const numStr = Math.abs(num).toString().padStart(width, '0');

    // Add the sign only if the number is not zero
    return (num !== 0 ? sign : '') + numStr;
}

// Test Data
console.log(zeroFill(120, 5, '-')); // "-00120"
console.log(zeroFill(29, 4));       // "0029"
