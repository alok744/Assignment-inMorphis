function hex_to_ascii(hex) {
    let ascii = '';
    for (let i = 0; i < hex.length; i += 2) {
        const hexCode = hex.substring(i, i + 2); // Get two hex digits
        ascii += String.fromCharCode(parseInt(hexCode, 16)); // Convert hex to ASCII
    }
    return ascii;
}

// Test Data
console.log(hex_to_ascii('3132'));    // Output: "12"
console.log(hex_to_ascii('313030'));   // Output: "100"
