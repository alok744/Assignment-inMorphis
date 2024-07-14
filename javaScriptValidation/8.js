//Regular expressions (RegExp) are patterns used to match character combinations in strings. 
//Think of them as a way to find or manipulate text based on specific rules.
// If you want to check if a string contains the word "hello":
// const regex = /hello/; // This is a regular expression.
// console.log(regex.test('hello world')); // true
// console.log(regex.test('hi there'));     // false
// In this example, the regex checks if "hello" appears in the string. 
//If it does, the test returns true; if not, it returns false.

function isRegExp(value) {
    return value instanceof RegExp;
}

// Test Data
console.log(isRegExp(/abc/));               // true (it's a RegExp)
console.log(isRegExp(new RegExp('abc')));   // true (it's a RegExp)
console.log(isRegExp('abc'));                 // false (string is not a RegExp)
console.log(isRegExp({}));                   // false (object is not a RegExp)
