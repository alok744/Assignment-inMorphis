function min_date(dateArray) {
    let minDate = new Date(dateArray[0]); 
    for (let i = 1; i < dateArray.length; i++) {
        const currentDate = new Date(dateArray[i]);
        if (currentDate < minDate) {
            minDate = currentDate;
        }
    }
    return minDate.toISOString().split('T')[0];
}


console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
