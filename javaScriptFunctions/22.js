function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countLetterOccurrences('w3resource.com', 'o'));  // Expected Output: 2
  