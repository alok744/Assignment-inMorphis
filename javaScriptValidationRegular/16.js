function isHexadecimal(value) {
    const hexRegex = /^[0-9A-Fa-f]+$/;
    return hexRegex.test(value);
}

// Example usage:
let hexValue = "1A2F";
console.log(`${hexValue} is a hexadecimal value? ${isHexadecimal(hexValue)}`); 

hexValue = "FF00ZZ";
console.log(`${hexValue} is a hexadecimal value? ${isHexadecimal(hexValue)}`);

hexValue = "12345";
console.log(`${hexValue} is a hexadecimal value? ${isHexadecimal(hexValue)}`); 

hexValue = "abcDEF";
console.log(`${hexValue} is a hexadecimal value? ${isHexadecimal(hexValue)}`); 
