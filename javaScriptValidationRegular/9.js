function isValidURL(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
}

// Example usage:
let url = "https://www.example.com";
console.log(`${url} is a valid URL? ${isValidURL(url)}`);

url = "ftp://example.com/file.txt";
console.log(`${url} is a valid URL? ${isValidURL(url)}`);

url = "invalid-url";
console.log(`${url} is a valid URL? ${isValidURL(url)}`);
