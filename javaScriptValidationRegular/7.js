function isValidIP(ip) {
    const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})(\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})){3}$/;
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/;
    return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

// Example usage:
let ip = "192.168.1.1";
console.log(`${ip} is a valid IP address? ${isValidIP(ip)}`);

ip = "1200:0000:AB00:1234:0000:2552:7777:1313";
console.log(`${ip} is a valid IP address? ${isValidIP(ip)}`);

ip = "999.999.999.999";
console.log(`${ip} is a valid IP address? ${isValidIP(ip)}`);

ip = "1200::AB00:1234::2552:7777:1313";
console.log(`${ip} is a valid IP address? ${isValidIP(ip)}`);
