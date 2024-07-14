function isPalindrome(str) {
    let cleanedStr = "";
    for (let char of str) {
      if (char !== ' ') {
        cleanedStr += char.toLowerCase();
      }
    }
    
    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
      reversedStr += cleanedStr[i];
    }
  
    return cleanedStr === reversedStr;
  }
  
  console.log(isPalindrome("madam"));        // Expected Output: true
  console.log(isPalindrome("nurses run"));   // Expected Output: true
  console.log(isPalindrome("hello"));        // Expected Output: false
  