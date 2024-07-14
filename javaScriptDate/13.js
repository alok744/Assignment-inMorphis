function timeConvert(minutes) {
    if (minutes < 0) return "Please enter a positive number of minutes.";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${minutes} minutes = ${hours} hour(s)${hours === 0 ? '' : ' and '}${remainingMinutes} minute(s).`;
}


console.log(timeConvert(200)); 
