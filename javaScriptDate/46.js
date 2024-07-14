function diff_days(dt1, dt2) {
    const diffTime = Math.abs(dt2 - dt1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Test Data
const dt1 = new Date("October 13, 2014 08:11:00");
const dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));
