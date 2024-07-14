function isPerfectNumber(num) {
    if (num <= 1) {
      return false;
    }
    
    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    
    return sum === num;
  }
  
  console.log(isPerfectNumber(6));    // Expected Output: true
  console.log(isPerfectNumber(28));   // Expected Output: true
  console.log(isPerfectNumber(496));  // Expected Output: true
  console.log(isPerfectNumber(8128)); // Expected Output: true
  console.log(isPerfectNumber(5));    // Expected Output: false
  