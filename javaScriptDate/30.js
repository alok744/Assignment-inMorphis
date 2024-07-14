function getMeridiem() {
    const date = new Date();
    const hours = date.getHours();
    return hours >= 12 ? 'pm' : 'am';
}
console.log(getMeridiem());
