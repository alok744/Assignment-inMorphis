function difference(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    const uniqueElements = new Set(combined.flat());
    return Array.from(uniqueElements).map(String);
  }
  
  // Test data
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: ["1", "2", "3", "10", "100"]
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // Output: ["1", "2", "3", "4", "5", "6"]
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: ["1", "2", "3", "10", "100"]
  