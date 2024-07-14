function unix_timestamp_to_time(timestamp) {
    return new Date(timestamp * 1000).toISOString().slice(0, 19).replace('T', ' ');
}

// Test Data
console.log(unix_timestamp_to_time(1421298000));
console.log(unix_timestamp_to_time(1450066800));
