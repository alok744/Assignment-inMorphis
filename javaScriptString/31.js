function escape_html(str) {
    const escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return str.replace(/[&<>"']/g, (match) => escapeMap[match]);
}

// Test Data
console.log(escape_html('PHP & MySQL')); // "PHP &amp; MySQL"
console.log(escape_html('3 > 2'));       // "3 &gt; 2"
