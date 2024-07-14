function protect_email(email) {
    const [user, domain] = email.split('@');
    const hiddenUser = user.slice(0, user.length / 2) + '...';
    return `${hiddenUser}@${domain}`;
}

// Test Data
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
