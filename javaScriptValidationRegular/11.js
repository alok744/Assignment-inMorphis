function isValidTimeString(value) {
    const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    return timeRegex.test(value);
}

// Example usage:
let timeString = "14:30";
console.log(`${timeString} is a valid time string? ${isValidTimeString(timeString)}`);

timeString = "23:59";
console.log(`${timeString} is a valid time string? ${isValidTimeString(timeString)}`); 

timeString = "24:00";
console.log(`${timeString} is a valid time string? ${isValidTimeString(timeString)}`);

timeString = "12:60";
console.log(`${timeString} is a valid time string? ${isValidTimeString(timeString)}`);

timeString = "7:30";
console.log(`${timeString} is a valid time string? ${isValidTimeString(timeString)}`);
