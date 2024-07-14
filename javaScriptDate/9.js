function lastday(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Test Data
console.log(lastday(2014, 0)); // 31 (January 2014)
console.log(lastday(2014, 1)); // 28 (February 2014)
console.log(lastday(2014, 11)); // 31 (December 2014)
