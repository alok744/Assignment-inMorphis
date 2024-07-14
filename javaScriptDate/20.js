function short_Days(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}

// Test Data
const dt = new Date(2015, 10, 1);
console.log(short_Days(dt)); // "Sun"
