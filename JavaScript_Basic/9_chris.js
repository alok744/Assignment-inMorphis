const today = new Date();
const currentYear = today.getFullYear();
let nextChristmas = new Date(currentYear, 11, 25);

if (today > nextChristmas) {
    nextChristmas = new Date(currentYear + 1, 11, 25);
}

const oneDay = 24 * 60 * 60 * 1000;
const daysLeft = Math.round((nextChristmas - today) / oneDay);

console.log(`Days left until next Christmas: ${daysLeft}`);
