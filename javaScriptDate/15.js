function quarter_of_the_year(date) {
    const month = date.getMonth() + 1; 
    return Math.ceil(month / 3);
}

console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18))); 