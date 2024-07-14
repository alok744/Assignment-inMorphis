function sort_year(date) {
    return date.getFullYear().toString().slice(-2);
}

// Test Data
const dt = new Date(1989, 10, 1);
console.log(sort_year(dt));
