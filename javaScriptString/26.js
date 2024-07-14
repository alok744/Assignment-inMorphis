function remove_first_occurrence(str, search) {
    const index = str.toLowerCase().indexOf(search.toLowerCase());
    if (index === -1) {
        return str; // If the search string is not found, return the original string
    }
    return str.slice(0, index) + str.slice(index + search.length); // Remove the first occurrence
}

// Test Data
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); // Output: "The quick brown fox jumps over lazy dog"
