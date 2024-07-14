function isValidUSZipCode(zip) {
    const zipRegex = /^\d{5}(?:-\d{4})?$/;
    return zipRegex.test(zip);
}

// Example usage:
let zipCode = "12345";
console.log(`${zipCode} is a valid US zip code? ${isValidUSZipCode(zipCode)}`);

zipCode = "12345-6789";
console.log(`${zipCode} is a valid US zip code? ${isValidUSZipCode(zipCode)}`);

zipCode = "123456";
console.log(`${zipCode} is a valid US zip code? ${isValidUSZipCode(zipCode)}`);

zipCode = "1234";
console.log(`${zipCode} is a valid US zip code? ${isValidUSZipCode(zipCode)}`);

zipCode = "12345-";
console.log(`${zipCode} is a valid US zip code? ${isValidUSZipCode(zipCode)}`);
