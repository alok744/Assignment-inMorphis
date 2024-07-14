function alphabetizeString(str) {
    const vowels = str.match(/[aeiouAEIOU]/g) || [];
    const vowelCount = vowels.length;
    const alphabetizedString = str.replace(/\s+/g, '').split('').sort().join('');
    return { vowelCount, alphabetizedString };
}

// Example usage:
const inputString = 'United States';
const result = alphabetizeString(inputString);
console.log(`Number of vowels: ${result.vowelCount}`);
console.log(`Alphabetized string: "${result.alphabetizedString}"`);
