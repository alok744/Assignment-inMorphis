function calculate_age(birth_date) {
    const age_ms = Date.now() - birth_date.getTime();
    const age_date = new Date(age_ms); 
    return Math.abs(age_date.getUTCFullYear() - 1970);
}

// Test Data
console.log(calculate_age(new Date(1982, 11, 4))); // 32
console.log(calculate_age(new Date(1962, 1, 1))); // 53
