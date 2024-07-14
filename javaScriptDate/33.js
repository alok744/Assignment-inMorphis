function hours_with_zeroes(dt) {
    return dt.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit' });
}
const dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt));
