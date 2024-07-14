function max_date(dateArray) {
    return new Date(Math.max.apply(null, dateArray.map(function(date) {
        return new Date(date);
    }))).toISOString().split('T')[0];
}

// Test Data
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // "2015/02/02"
