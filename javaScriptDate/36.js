function seconds_with_leading_zeros(dt) {
    return ('0' + dt.getSeconds()).slice(-2);
}

const dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));
