function letterOccurrences(str) {
    let occurrences = {};
    for (let char of str) {
      if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        occurrences[char] = (occurrences[char] || 0) + 1;
      }
    }
    return occurrences;
  }
  
  console.log(letterOccurrences("thequickbrownfoxjumpsoverthelazydog"));
  