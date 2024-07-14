function getCurrentDate() {
    let currentDate = new Date();


    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();


    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    let dateFormat1 = `${month}-${day}-${year}`; 
    let dateFormat2 = `${month}/${day}/${year}`; 
    let dateFormat3 = `${day}-${month}-${year}`; 
    let dateFormat4 = `${day}/${month}/${year}`; 

    console.log(`mm-dd-yyyy: ${dateFormat1}`);
    console.log(`mm/dd/yyyy: ${dateFormat2}`);
    console.log(`dd-mm-yyyy: ${dateFormat3}`);
    console.log(`dd/mm/yyyy: ${dateFormat4}`);
}
getCurrentDate();
