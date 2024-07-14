function uncamelize(str, separator = ' ') {
    let result = '';
    
    for (let char of str) {
        if (char === char.toUpperCase() && result.length > 0) {
            result += separator; // Add separator before uppercase letters
        }
        result += char.toLowerCase(); // Add the current character in lowercase
    }

    return result;
}

// Test Data
console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld', '-')); // "hello-world"
console.log(uncamelize('helloWorld', '_')); // "hello_world"
