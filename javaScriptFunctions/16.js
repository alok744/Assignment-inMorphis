function extractUniqueCharacters(str) {
    let uniqueChars = '';
    for (let char of str) {
      if (!uniqueChars.includes(char)) {
        uniqueChars += char;
      }
    }
    return uniqueChars;
  }
  
  console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));  // Expected Output: "thequickbrownfxjmpsvlazydg"
  