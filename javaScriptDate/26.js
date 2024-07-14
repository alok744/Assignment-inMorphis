function numeric_month(date) {
    const month = date.getMonth() + 1; 
    return month.toString().padStart(2, '0'); 
}

// Test Data
const dt = new Date(2015, 10, 1);
console.log(numeric_month(dt)); // "11"
