function string_chop(str, chunkSize = str.length) {
    let result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        let chunk = '';
        for (let j = i; j < i + chunkSize && j < str.length; j++) {
            chunk += str[j];
        }
        result[result.length] = chunk;
    }
    return result;
}

// Test Data
console.log(string_chop('w3resource'));        // ["w3resource"]
console.log(string_chop('w3resource', 2));     // ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3));     // ["w3r", "eso", "urc", "e"]
