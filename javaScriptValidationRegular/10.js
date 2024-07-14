function isAlphanumeric(value) {
    const alphanumericRegex = /^[a-z0-9]+$/i;
    return alphanumericRegex.test(value);
}

// Example usage:
let value = "abc123";
console.log(`${value} is alphanumeric? ${isAlphanumeric(value)}`); 

value = "abc123!";
console.log(`${value} is alphanumeric? ${isAlphanumeric(value)}`);
value = "ABC456";
console.log(`${value} is alphanumeric? ${isAlphanumeric(value)}`); 

value = "123";
console.log(`${value} is alphanumeric? ${isAlphanumeric(value)}`); 
