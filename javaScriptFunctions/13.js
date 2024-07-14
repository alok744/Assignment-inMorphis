function computeFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors[factors.length] = i;
      }
    }
    return factors;
  }
  
  console.log(computeFactors(12));  // Expected Output: [1, 2, 3, 4, 6, 12]
  