function getWeekEndDate() {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() + (6 - day);
    return new Date(today.setDate(diff));
}

// Test Data
const weekEndDate = getWeekEndDate();
console.log(weekEndDate);
