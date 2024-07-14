function longestSubstringWithoutRepeating(str) {
    let longest = '';
    let currentSubstring = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (currentSubstring.indexOf(char) === -1) {
        currentSubstring += char;
        if (currentSubstring.length > longest.length) {
          longest = currentSubstring;
        }
      } else {
        const index = currentSubstring.indexOf(char);
        currentSubstring = currentSubstring.substring(index + 1) + char;
      }
    }
  
    return longest;
  }
  
  console.log(longestSubstringWithoutRepeating("abcabcbb"));  // Expected Output: "abc"
  