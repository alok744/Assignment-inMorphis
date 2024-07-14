function diff_minutes(dt1, dt2) {
    return Math.floor((dt2 - dt1) / (1000 * 60));
}

const dt1 = new Date("October 13, 2014 11:11:00");
const dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(dt1, dt2));
