function getMonthEndDate() {
    const today = new Date();
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return endOfMonth;
}

// Test Data
const monthEndDate = getMonthEndDate();
console.log(monthEndDate);
