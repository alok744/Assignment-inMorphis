function flatten(arr, shallow = false) {
    if (shallow) {
        // If shallow is true, flatten only one level
        return [].concat(...arr);
    } else {
        // If shallow is false, flatten deeply
        return arr.reduce((acc, val) => {
            if (Array.isArray(val)) {
                return acc.concat(flatten(val)); // Recursively flatten
            } else {
                return acc.concat(val); // Add non-array items
            }
        }, []);
    }
}

// Sample Data
console.log(flatten([1, [2], [3, [[4]]], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true)); // [1, 2, 3, [[4]], 5, 6]
