function ISO_numeric_date(date) {
    return (date.getDay() + 6) % 7 + 1;
}

// Test Data
const dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt)); // 7
