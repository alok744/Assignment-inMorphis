function full_year(date) {
    return date.getFullYear();
}

// Test Data
const dt = new Date(2017, 10, 1);
console.log(full_year(dt)); 
