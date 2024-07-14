function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
    }
    return result.trim();
  }
  
  console.log(capitalizeFirstLetter("the quick brown fox"));  // Expected Output: 'The Quick Brown Fox'
  