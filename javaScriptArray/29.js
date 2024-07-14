function num_string_range(start, end, step) {
    const result = [];
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
  
    for (let i = startCode; i <= endCode; i += step) {
      result.push(String.fromCharCode(i));
    }
  
    return result;
  }
  
  // Test Data
  console.log(num_string_range('a', 'z', 2)); // Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
  