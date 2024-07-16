function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
    const age1 = currentYear - birthYear;
    const age2 = age1 - 1;
    console.log(`You are either ${age2} or ${age1}`);
}

calculateAge(1990, 2024);
calculateAge(1985, 2024);
calculateAge(2000);

calculateAge(1995);
