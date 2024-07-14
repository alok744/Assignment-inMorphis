function getType(value) {
    return typeof value;
  }
  
  console.log(getType(42));           // Expected Output: 'number'
  console.log(getType('Hello'));      // Expected Output: 'string'
  console.log(getType(true));         // Expected Output: 'boolean'
  console.log(getType({}));           // Expected Output: 'object'
  console.log(getType(function() {})); // Expected Output: 'function'
  console.log(getType(undefined));    // Expected Output: 'undefined'
  