function days_of_a_year(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}

// Test Data
console.log(days_of_a_year(2015)); // 365
console.log(days_of_a_year(2016)); // 366
