function swapcase(str) {
    let result = '';

    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase(); // Convert uppercase to lowercase
        } else {
            result += char.toUpperCase(); // Convert lowercase to uppercase
        }
    }

    return result;
}

// Test Data
console.log(swapcase('AaBbc')); // "aAbBC"
