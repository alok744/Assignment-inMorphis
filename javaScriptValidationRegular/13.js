function isValidUKPostcode(postcode) {
    const postcodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;
    return postcodeRegex.test(postcode);
}

// Example usage:
let postcode = "SW1A 1AA";
console.log(`${postcode} is a valid UK postcode? ${isValidUKPostcode(postcode)}`); 

postcode = "EC1A 1BB";
console.log(`${postcode} is a valid UK postcode? ${isValidUKPostcode(postcode)}`); 

postcode = "W1A 1AA";
console.log(`${postcode} is a valid UK postcode? ${isValidUKPostcode(postcode)}`); 

postcode = "WC1A 1BB";
console.log(`${postcode} is a valid UK postcode? ${isValidUKPostcode(postcode)}`); 

postcode = "12345";
console.log(`${postcode} is a valid UK postcode? ${isValidUKPostcode(postcode)}`); 

postcode = "AB12 3CD";
console.log(`${postcode} is a valid UK postcode? ${isValidUKPostcode(postcode)}`); 
