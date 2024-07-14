function array_Clone(arr) {
    let clone = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        clone[i] = array_Clone(arr[i]);
      } else {
        clone[i] = arr[i];
      }
    }
    return clone;
  }
  
  console.log(array_Clone([1, 2, 4, 0]));          // Expected Output: [1, 2, 4, 0]
  console.log(array_Clone([1, 2, [4, 0]]));       // Expected Output: [1, 2, [4, 0]]
  