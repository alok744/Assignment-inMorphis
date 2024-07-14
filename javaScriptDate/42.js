function add_weeks(dt, weeks) {
    dt.setDate(dt.getDate() + weeks * 7);
    return dt;
}

// Test Data
const dt = new Date(2014, 10, 2);
console.log(add_weeks(dt, 10).toString());