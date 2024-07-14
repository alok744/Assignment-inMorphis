function remove_non_ascii(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        // Check if the character is within the printable ASCII range
        if (charCode >= 32 && charCode <= 126) {
            result += str[i];
        }
    }
    
    return result;
}

// Test Data
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ')); // "PHP-MySQL"
