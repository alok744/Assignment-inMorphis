function longestPalindrome(str) {
    let longest = '';
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        const substring = str.substring(i, j + 1);
        if (isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
        }
      }
    }
  
    return longest;
  }
  
  function isPalindrome(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s[i];
    }
    return s === reversed;
  }
  
  console.log(longestPalindrome("bananas"));  // Expected Output: "anana"
  