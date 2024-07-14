function add_months(dt, months) {
    dt.setMonth(dt.getMonth() + months);
    return dt;
}

// Test Data
const dt = new Date(2014, 10, 2);
console.log(add_months(dt, 10).toString());