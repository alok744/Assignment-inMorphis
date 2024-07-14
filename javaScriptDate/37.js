function getTimezone(dt) {
    return dt.toLocaleTimeString('en-us', { timeZoneName: 'long' }).split(' ').pop();
}

// Test Data
const dt = new Date();
console.log(getTimezone(dt)); 