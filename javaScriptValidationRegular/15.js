function isValidSSN(ssn) {
    const ssnRegex = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
    return ssnRegex.test(ssn);
}

// Example usage:
let ssn = "123-45-6789";
console.log(`${ssn} is a valid SSN? ${isValidSSN(ssn)}`); 

ssn = "078-05-1120";
console.log(`${ssn} is a valid SSN? ${isValidSSN(ssn)}`); 

ssn = "000-12-3456";
console.log(`${ssn} is a valid SSN? ${isValidSSN(ssn)}`); 

ssn = "666-12-3456";
console.log(`${ssn} is a valid SSN? ${isValidSSN(ssn)}`); 

ssn = "987-65-4321";
console.log(`${ssn} is a valid SSN? ${isValidSSN(ssn)}`); 
