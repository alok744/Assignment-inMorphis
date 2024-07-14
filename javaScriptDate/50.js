function getWeekStartDate() {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
    return new Date(today.setDate(diff));
}

// Test Data
const weekStartDate = getWeekStartDate();
console.log(weekStartDate); // Output: Start date of the current week
