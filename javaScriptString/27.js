function ascii_to_hexa(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16); // Convert each character to its hex value
    }
    return hex;
}

// Test Data
console.log(ascii_to_hexa('12'));    // Output: "3132"
console.log(ascii_to_hexa('100'));   // Output: "313030"
