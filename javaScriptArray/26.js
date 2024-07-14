function findPairWithSum(numbers, target) {
    const indices = {};
    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      if (indices[complement] !== undefined) {
        return [indices[complement], i];
      }
      indices[numbers[i]] = i;
    }
    return null;
  }
  
  const numbers = [10, 20, 10, 40, 50, 60, 70];
  const target = 50;
  
  const result = findPairWithSum(numbers, target);
  console.log(result); // Output: [2, 3]
  