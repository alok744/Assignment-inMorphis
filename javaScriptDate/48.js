function diff_months(dt1, dt2) {
    let diff = (dt2.getFullYear() - dt1.getFullYear()) * 12;
    diff -= dt1.getMonth();
    diff += dt2.getMonth();
    return diff <= 0 ? 0 : diff;
}

// Test Data
const dt1 = new Date("June 13, 2014 08:11:00");
const dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));
