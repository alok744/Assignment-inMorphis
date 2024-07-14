function removeArrayElement(arr, element) {
    return arr.filter(item => item !== element);
  }
  
  // Test data
  console.log(removeArrayElement([2, 5, 9, 6], 5)); // Output: [2, 9, 6]
  