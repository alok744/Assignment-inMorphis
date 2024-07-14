function getMonthStartDate() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
}

const monthStartDate = getMonthStartDate();
console.log(monthStartDate);
