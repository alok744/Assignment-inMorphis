function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  // Test data
  const items = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
  console.log(getRandomItem(items)); // Output: Random item from the array
  