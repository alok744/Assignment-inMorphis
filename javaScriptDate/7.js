function is_weekend(date_string) {
    const date = new Date(date_string);
    const day = date.getDay();
    if (day === 0 || day === 6) {
        return "weekend";
    }
    // Return undefined or handle non-weekend days as needed
}

// Test Data
console.log(is_weekend('Nov 15, 2014')); // "weekend" (Saturday)
console.log(is_weekend('Nov 16, 2014')); // "weekend" (Sunday)
console.log(is_weekend('Nov 17, 2014')); // undefined (Monday)
