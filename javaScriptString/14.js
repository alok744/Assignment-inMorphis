function insert(original, toInsert = '', position = 1) {
    // Ensure the position is within bounds
    position = Math.max(0, Math.min(position, original.length)); // Ensure position is within the length of the string
    
    return original.slice(0, position) + toInsert + original.slice(position); // Insert the string at the specified position
}

// Test Data
console.log(insert('We are doing some exercises.')); // "We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ')); // "JavaScript We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); // "We are doing some JavaScript exercises."
