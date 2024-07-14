function abbrev_name(fullName) {
    const nameArray = fullName.split(' ');
    if (nameArray.length > 1) {
        return `${nameArray[0]} ${nameArray[1][0]}.`;
    }
    return fullName; // Return the original name if there's only one part
}

// Test Data
console.log(abbrev_name("Robin Singh")); // "Robin S."
