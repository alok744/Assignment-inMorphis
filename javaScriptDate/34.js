function hours_without_zeroes(dt) {
    return dt.getHours();
}

const dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt));
