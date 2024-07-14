function arrayFilled(size, value) {
    const result = [];
    for (let i = 0; i < size; i++) {
      result.push(value);
    }
    return result;
  }
  
  // Test data
  console.log(arrayFilled(6, 0));  // Output: [0, 0, 0, 0, 0, 0]
  console.log(arrayFilled(4, 11)); // Output: [11, 11, 11, 11]
  