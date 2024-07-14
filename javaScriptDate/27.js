function short_months(date) {
    return date.toLocaleDateString('en-US', { month: 'short' });
}

// Test Data
const dt = new Date(2015, 10, 1);
console.log(short_months(dt)); // "Nov"
