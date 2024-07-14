function internet_time(dt) {
    return Math.floor((dt.getTime() % 86400000) / 86400).toString().padStart(3, '0');
}

const dt = new Date(1989, 10, 1);
console.log(internet_time(dt)); // Outputs: 812
