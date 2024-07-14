function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = (left + right) / 2 | 0;
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(binarySearch(sortedArray, 5));  // Expected Output: index of 5
  