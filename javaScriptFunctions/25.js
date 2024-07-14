function longestCountryName(countries) {
    let longest = '';
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].length > longest.length) {
        longest = countries[i];
      }
    }
    return longest;
  }
  
  console.log(longestCountryName(["Australia", "Germany", "United States of America"]));  // Expected Output: "United States of America"
  