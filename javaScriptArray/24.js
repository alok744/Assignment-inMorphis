function removeFalsyValues(arr) {
    return arr.filter(item => item !== null && item !== 0 && item !== "" && item !== false && item !== undefined && !Number.isNaN(item));
  }
  
  // Sample array
  const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  
  // Removing falsy values
  const result = removeFalsyValues(sampleArray);
  
  // Output the result
  console.log(result); // Output: [15, -22, 47]
  