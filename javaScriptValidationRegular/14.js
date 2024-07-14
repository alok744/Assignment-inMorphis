function isValidCanadaPostalCode(postalCode) {
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return postalCodeRegex.test(postalCode);
}

// Example usage:
let postalCode = "K1A 0B1";
console.log(`${postalCode} is a valid Canada postal code? ${isValidCanadaPostalCode(postalCode)}`); 

postalCode = "M5H 2N2";
console.log(`${postalCode} is a valid Canada postal code? ${isValidCanadaPostalCode(postalCode)}`); 

postalCode = "A1A 1A1";
console.log(`${postalCode} is a valid Canada postal code? ${isValidCanadaPostalCode(postalCode)}`); 

postalCode = "12345";
console.log(`${postalCode} is a valid Canada postal code? ${isValidCanadaPostalCode(postalCode)}`); 

postalCode = "AB12 3CD";
console.log(`${postalCode} is a valid Canada postal code? ${isValidCanadaPostalCode(postalCode)}`); 
