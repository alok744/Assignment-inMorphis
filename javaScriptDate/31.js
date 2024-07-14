function getMeridiem() {
    const date = new Date();
    const hours = date.getHours();
    return hours >= 12 ? 'PM' : 'AM';
}

console.log(getMeridiem());
