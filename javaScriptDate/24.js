function ISO8601_week_no(date) {
    const thursday = new Date(date.getTime());
    thursday.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(thursday.getFullYear(), 0, 1);
    const weekNo = Math.ceil(((thursday - yearStart) / 86400000 + 1) / 7);
    return weekNo;
}

// Test Data
const dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt)); // 44
