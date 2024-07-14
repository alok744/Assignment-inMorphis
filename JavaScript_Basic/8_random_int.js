const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 10) + 1;

rl.question('Guess a number between 1 and 10: ', (answer) => {
    let userGuess = parseInt(answer);
    if (userGuess === randomNumber) {
        console.log('Good Work');
    } else {
        console.log('Not matched');
    }
    rl.close();
});
