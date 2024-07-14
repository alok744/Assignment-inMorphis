function findLeapYears(startYear, endYear) {
    const leapYears = [];

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    return leapYears;
}

// Example usage:
const startYear = 2000;
const endYear = 2020;
const leapYearsInRange = findLeapYears(startYear, endYear);
console.log(leapYearsInRange); // Output: [2000, 2004, 2008, 2012, 2016, 2020]
