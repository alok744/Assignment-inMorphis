function getSubsets(str) {
    const subsets = [];
    const length = str.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j <= length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
  
    return subsets;
  }
  
  // Sample data
  const data = "dog";
  const result = getSubsets(data);
  console.log(result); // Output: ["d", "do", "dog", "o", "og", "g"]
  