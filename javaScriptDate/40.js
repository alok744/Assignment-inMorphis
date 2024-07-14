function timezone_offset_in_seconds(dt) {
    return dt.getTimezoneOffset() * -60;
}

const dt = new Date();
console.log(timezone_offset_in_seconds(dt));
