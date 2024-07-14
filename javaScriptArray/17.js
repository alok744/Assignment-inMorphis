function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Get random index
        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray.slice()); // Using slice to create a copy
console.log(shuffledArray); // Output: Shuffled version of the array
