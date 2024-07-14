function isValidDomain(value) {
    const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
    return domainRegex.test(value);
}

// Example usage:
let domain = "example.com";
console.log(`${domain} is a valid domain? ${isValidDomain(domain)}`); 

domain = "subdomain.example.co.uk";
console.log(`${domain} is a valid domain? ${isValidDomain(domain)}`); 

domain = "invalid@domain.com";
console.log(`${domain} is a valid domain? ${isValidDomain(domain)}`);

domain = "example";
console.log(`${domain} is a valid domain? ${isValidDomain(domain)}`); 