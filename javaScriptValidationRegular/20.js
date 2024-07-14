function containsAlphaDashUnderscore(value) {
    const regex = /[a-zA-Z_-]/;
    return regex.test(value);
}

// Example usage:
console.log(containsAlphaDashUnderscore("alpha-Dash_Underscore")); 

console.log(containsAlphaDashUnderscore("123")); 

console.log(containsAlphaDashUnderscore("alpha123")); 

console.log(containsAlphaDashUnderscore("alpha_Dash_Underscore123")); 
