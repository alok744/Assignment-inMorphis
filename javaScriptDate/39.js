function diff_to_GMT(dt) {
    const offset = -dt.getTimezoneOffset() / 60;
    return `${offset >= 0 ? '+' : '-'}${Math.abs(offset).toFixed(2).replace('.', '.')}`;
}

const dt = new Date();
console.log(diff_to_GMT(dt));