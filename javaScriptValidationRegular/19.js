function containsAlphaDashUnderscore(value) {
    const regex = /^[a-zA-Z-_]+$/;
    return regex.test(value);
}

let str = "alpha-Dash_Underscore";
console.log(`Does "${str}" contain alpha, dash, and underscore? ${containsAlphaDashUnderscore(str)}`);

str = "123";
console.log(`Does "${str}" contain alpha, dash, and underscore? ${containsAlphaDashUnderscore(str)}`);

str = "alpha123";
console.log(`Does "${str}" contain alpha, dash, and underscore? ${containsAlphaDashUnderscore(str)}`);

str = "alpha_Dash_Underscore123";
console.log(`Does "${str}" contain alpha, dash, and underscore? ${containsAlphaDashUnderscore(str)}`);
