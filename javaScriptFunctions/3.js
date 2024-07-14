function generateCombinations(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        result[result.length] = str.slice(i, j);
      }
    }
    return result;
  }
  
  console.log(generateCombinations("dog"));  // Expected Output: ['d', 'do', 'dog', 'o', 'og', 'g']
  