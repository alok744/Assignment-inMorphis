function arrayRange(start, length) {
    return Array.from({ length }, (_, index) => start + index);
  }
  
  // Test data
  console.log(arrayRange(1, 4));  // Output: [1, 2, 3, 4]
  console.log(arrayRange(-6, 4)); // Output: [-6, -5, -4, -3]
  