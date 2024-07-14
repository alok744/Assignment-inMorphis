function findDateInString(str) {
    const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/;
    const match = str.match(dateRegex);
    return match ? match[0] : null;
}

let inputString = "The event is scheduled for 2024-07-13.";
console.log(`Date found: ${findDateInString(inputString)}`);

inputString = "No date here!";
console.log(`Date found: ${findDateInString(inputString)}`);
