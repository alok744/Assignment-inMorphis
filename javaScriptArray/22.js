function union(arr1, arr2) {
    // Concatenate the two arrays
    const combined = arr1.concat(arr2);
    // Filter out duplicates
    return combined.filter((value, index) => combined.indexOf(value) === index);
}

// Sample Data
console.log(union([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 100, 10]
