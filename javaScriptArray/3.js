function first(arr, n) {
    if (n === undefined) {
      return arr[0];
    }
    return arr.slice(0, n);
  }
  
  console.log(first([7, 9, 0, -2]));          // Expected Output: 7
  console.log(first([], 3));                   // Expected Output: []
  console.log(first([7, 9, 0, -2], 3));       // Expected Output: [7, 9, 0]
  console.log(first([7, 9, 0, -2], 6));       // Expected Output: [7, 9, 0, -2]
  console.log(first([7, 9, 0, -2], -3));      // Expected Output: []
  