function arrayFilled(size, value) {
    const result = [];
    for (let i = 0; i < size; i++) {
      result.push(value);
    }
    return result;
  }
  
  // Test data
  console.log(arrayFilled(3, 'default value')); // Output: ["default value", "default value", "default value"]
  console.log(arrayFilled(4, 'password'));      // Output: ["password", "password", "password", "password"]
  