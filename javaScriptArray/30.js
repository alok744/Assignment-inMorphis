function mergeArray(array1, array2) {
    const mergedArray = [...array1, ...array2];
    //const mergedArray = array1.concat(array2);
    const uniqueArray = Array.from(new Set(mergedArray));
    return uniqueArray;
  }
  
  // Test data
  var array1 = [1, 2, 3];
  var array2 = [2, 30, 1];
  console.log(mergeArray(array1, array2)); // Output: [1, 2, 3, 30]
  