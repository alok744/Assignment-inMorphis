function camelize(str) {
    // Split the string into words
    let words = str.split(' ');
    let result = ''; // Initialize an empty string for the result

    for (let i = 0; i < words.length; i++) {
        if (words[i]) { // Check if the word is not empty
            if (i === 0) {
                result += words[i].toLowerCase(); // First word in lowercase
            } else {
                result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); // Capitalize first letter of subsequent words
            }
        }
    }

    return result; // Return the camel case string
}

// Test Data
console.log(camelize("JavaScript Exercises")); // "javaScriptExercises"
console.log(camelize("JavaScript exercises")); // "javaScriptExercises"
console.log(camelize("JavaScriptExercises")); // "javaScriptExercises"
console.log(camelize("  JavaScript  Exercises  ")); // "javaScriptExercises"
