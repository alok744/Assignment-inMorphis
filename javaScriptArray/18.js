function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (array[mid] === target) {
            return mid; // Target found
        } else if (array[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Sample array
var items = [1, 2, 3, 4, 5, 7, 8, 9];

// Example usage
console.log(binarySearch(items, 1)); // Output: 0
console.log(binarySearch(items, 5)); // Output: 4
console.log(binarySearch(items, 9)); // Output: 7
console.log(binarySearch(items, 6)); // Output: -1 (not found)
