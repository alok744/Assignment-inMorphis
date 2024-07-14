function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Use a temporary variable for swapping
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
    }
  
    return arr;
  }

  const data = [6, 4, 0, 3, -2, 1];
  const sortedData = bubbleSort(data);
  console.log(sortedData); // Output: [-2, 0, 1, 3, 4, 6]
  