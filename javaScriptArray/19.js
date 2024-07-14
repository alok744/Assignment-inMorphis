function sumArrays(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const value1 = array1[i] || 0; // Use 0 if index is out of bounds
        const value2 = array2[i] || 0; // Use 0 if index is out of bounds
        result[i] = value1 + value2;
    }

    return result;
}

// Sample arrays
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

// Example usage
const summedArray = sumArrays(array1, array2);
console.log(summedArray); // Output: [4, 5, 8, 10, 12, 13]
