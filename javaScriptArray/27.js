function pluck(arr, key) {
    return arr.map(obj => obj[key]);
  }
  
  // Sample array of objects
  const sampleArray = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
  // Retrieve the 'name' property from all elements
  const result = pluck(sampleArray, 'name');
  console.log(result); // Output: ['Alice', 'Bob', 'Charlie']
  