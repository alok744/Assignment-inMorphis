function elementsLargerThan(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        result[result.length] = arr[i];
      }
    }
    return result;
  }
  
  console.log(elementsLargerThan([1, 5, 10, 15, 20], 10));  // Expected Output: [15, 20]
  