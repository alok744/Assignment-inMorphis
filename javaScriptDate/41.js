function add_years(dt, years) {
    dt.setFullYear(dt.getFullYear() + years);
    return dt;
}

const dt = new Date(2014, 10, 2);
console.log(add_years(dt, 10).toString());