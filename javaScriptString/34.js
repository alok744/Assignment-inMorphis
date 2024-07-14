function sentenceCase(str) {
    const sentences = str.split('. ');
    let result = '';

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i];
        if (sentence.length > 0) {
            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }
        result += sentence;
        if (i < sentences.length - 1) {
            result += '. ';
        }
    }

    return result;
}

// Test Data
console.log(sentenceCase('PHP exercises. python exercises.')); // "Php Exercises. Python Exercises."
