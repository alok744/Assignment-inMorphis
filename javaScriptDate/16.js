function days_passed(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 0); 
    const diff = date - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24; 
    return Math.floor(diff / oneDay);
}

// Test Data
console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));
