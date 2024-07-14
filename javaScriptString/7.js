function string_parameterize(str) {
    return str
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters
        .trim() // Trim whitespace from both ends
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}

// Test Data
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
