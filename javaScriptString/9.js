function capitalize_Words(str) {
    let result = '';
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
        }
    }
    
    return result.trim(); // Remove trailing space
}

// Test Data
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"
