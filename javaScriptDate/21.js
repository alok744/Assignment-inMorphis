function long_Days(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

// Test Data
const dt = new Date(2015, 10, 1);
console.log(long_Days(dt)); // "Sunday"
