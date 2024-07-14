function emptyArray(originalArray) {
    return []; // Return a new empty array
  }
  
  // Test data
  const originalArray = [1, 2, 3, 4];
  const newArray = emptyArray(originalArray);
  
  console.log(originalArray); // Output: [1, 2, 3, 4] (original array remains unchanged)
  console.log(newArray);      // Output: [] (new array is empty)
  