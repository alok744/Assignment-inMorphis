function getFunctionName(func) {
    return func.name;
  }
  
  function exampleFunction() {}
  
  console.log(getFunctionName(exampleFunction));  // Expected Output: "exampleFunction"
  