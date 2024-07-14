//Date
const currentDate = new Date();
console.log(currentDate); // Example output: Fri Jul 12 2024 15:30:00 GMT+0000 (Coordinated Universal Time)

//newDate Value...

const dateFromMilliseconds = new Date(1628700000000);
console.log(dateFromMilliseconds); // Example output: Tue Aug 11 2021 20:40:00 GMT+0000 (Coordinated Universal Time)

//new date String
const dateFromString = new Date('2024-07-12T15:30:00Z');
console.log(dateFromString); // Example output: Wed Jul 12 2024 15:30:00 GMT+0000 (Coordinated Universal Time)

//new date year months
const specificDate = new Date(2024, 6, 12, 15, 30, 0, 0);
console.log(specificDate); // Example output: Wed Jul 12 2024 15:30:00 GMT+0000 (Coordinated Universal Time)
