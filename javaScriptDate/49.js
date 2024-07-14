function diff_years(dt1, dt2) {
    return dt2.getFullYear() - dt1.getFullYear();
}

// Test Data
const dt1 = new Date("June 13, 2014 08:11:00");
const dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));
