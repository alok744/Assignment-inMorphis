function isFirstCharUppercase(str) {
    let firstChar = str.charAt(0);
    
    if (firstChar === firstChar.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

let inputString = "Hello";
console.log(`Is the first character uppercase? ${isFirstCharUppercase(inputString)}`);

inputString = "world";
console.log(`Is the first character uppercase? ${isFirstCharUppercase(inputString)}`);
