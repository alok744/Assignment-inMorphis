function isValidEmail(email) {
    const emailRegex = /^[\w!#$%&'*+\-/=?^`{|}~]+(\.[\w!#$%&'*+\-/=?^`{|}~]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

let email = "example.user@domain.com";
console.log(`${email} is a valid email address? ${isValidEmail(email)}`);

email = "invalid.email@domain..com";
console.log(`${email} is a valid email address? ${isValidEmail(email)}`);
email = "another_email@domain";
console.log(`${email} is a valid email address? ${isValidEmail(email)}`); 

email = "email@localhost";
console.log(`${email} is a valid email address? ${isValidEmail(email)}`); 