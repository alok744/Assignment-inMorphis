function daylights_savings(dt) {
    const jan = new Date(dt.getFullYear(), 0, 1).getTimezoneOffset();
    const jul = new Date(dt.getFullYear(), 6, 1).getTimezoneOffset();
    return dt.getTimezoneOffset() < Math.max(jan, jul) ? 1 : 0;
}

const dt = new Date();
console.log(daylights_savings(dt));