function rotateStringRight(inputString) {
    let chars = inputString.split('');

    for (let i = 0; i < 10; i++) {
        let lastChar = chars.pop();

        chars.unshift(lastChar);

        console.log(chars.join(''));
    }
}

let inputString = 'w3resource';

rotateStringRight(inputString);
