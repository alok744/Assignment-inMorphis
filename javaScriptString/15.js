
function humanize_format(num = 0) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = num % 100;

    // Determine the correct suffix
    let suffix = suffixes[0]; // Default to "th"
    if (remainder >= 11 && remainder <= 13) {
        suffix = suffixes[0]; // Special case for 11, 12, 13
    } else {
        suffix = suffixes[remainder % 10] || suffixes[0]; // Use last digit for suffix
    }

    return num + suffix; // Return the formatted string
}

// Test Data
console.log(humanize_format());      // "0th"
console.log(humanize_format(1));     // "1st"
console.log(humanize_format(8));     // "8th"
console.log(humanize_format(301));   // "301st"
console.log(humanize_format(402));   // "402nd"
