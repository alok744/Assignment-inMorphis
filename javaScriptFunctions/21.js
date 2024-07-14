function getSubsets(arr, subsetLength) {
    let result = [];
  
    function generateSubset(current, start) {
      if (current.length === subsetLength) {
        result.push([...current]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        current.push(arr[i]);
        generateSubset(current, i + 1);
        current.pop();
      }
    }
  
    generateSubset([], 0);
    return result;
  }
  
  console.log(getSubsets([1, 2, 3], 2));  // Expected Output: [[1, 2], [1, 3], [2, 3]]
  