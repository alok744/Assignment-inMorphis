function text_truncate(str, maxLength = str.length, ellipsis = '…') {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
    return str;
}

// Test Data
console.log(text_truncate('We are doing JS string exercises.')); // "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', 19)); // "We are doing JS ..."
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // "We are doing !!"
