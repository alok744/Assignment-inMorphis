function last(arr, n) {
    if (n === undefined) {
      return arr[arr.length - 1];
    }
    return arr.slice(-n);
  }
  
  console.log(last([7, 9, 0, -2]));           // Expected Output: -2
  console.log(last([7, 9, 0, -2], 3));        // Expected Output: [9, 0, -2]
  console.log(last([7, 9, 0, -2], 6));        // Expected Output: [7, 9, 0, -2]
  


//   const colors = ['red', 'green', 'blue', 'yellow'];
// const lastColor = colors.slice(-1);
// console.log(lastColor);  // Output: ['yellow']
