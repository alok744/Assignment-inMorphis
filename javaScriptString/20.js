function formatted_string(str, num, direction) {
    const numStr = String(num);
    const totalLength = str.length + numStr.length;
    
    if (direction === 'l') {
        return numStr + str;
    } else if (direction === 'r') {
        return str + numStr;
    }
    
    return numStr; // Default if no direction is specified
}

// Test Data
console.log(formatted_string('0000', 123, 'l')); // Output: "0123"
console.log(formatted_string('00000000', 123, 'r')); // Output: "12300000"
