function filterArrayValues(arr) {
    return arr.filter(item => item !== false && item !== null && item !== 0 && item !== '');
  }
  
  // Test data
  console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0])); // Output: [58, "abcd", true]
  