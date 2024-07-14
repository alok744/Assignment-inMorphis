function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Test Data
console.log(getDaysInMonth(1, 2012)); // 31 (January 2012 has 31 days)
console.log(getDaysInMonth(2, 2012)); // 29 (February 2012 is a leap year, so 29 days)
console.log(getDaysInMonth(9, 2012)); // 30 (September 2012 has 30 days)
console.log(getDaysInMonth(12, 2012)); // 31 (December 2012 has 31 days)
