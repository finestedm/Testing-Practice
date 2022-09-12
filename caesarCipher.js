const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetReversed = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

export function caesarCipher(string) {

    var reversedString = '' // declare variable to which we will add ciphered letters

    if (typeof string !== 'string' && typeof string !== 'number') { // accept only string or number
        return 'This is not riiiight';
    }

    string.split('').forEach(letter => {    // split string into separate characters
        if (isNumeric(letter)) {            // if a character is number leave it as it is
            reversedString += letter;
        } else if (letter === ' ') {        // if a character is space leave it as it is 
            reversedString += letter
        } else if (alphabet.includes(`${letter.toUpperCase()}`)) {  // if the character is uppercase we can search for it
            if (letter === letter.toUpperCase()) {
                const searchedLetter = alphabet.indexOf(letter);
                const searchedLetterReversed = alphabetReversed[searchedLetter];
                reversedString += searchedLetterReversed
            } else if (letter === letter.toLowerCase()) { // if the character is lowercase we can search for it only after uppercasing it
                const searchedLetter = alphabet.indexOf(letter.toUpperCase());
                const searchedLetterReversed = alphabetReversed[searchedLetter];
                reversedString += searchedLetterReversed.toLowerCase()      // switch the ciphered character to lowercase
            }
        } else {
            reversedString += letter    // if this is any other sign we can just add it
        }
    });

    return reversedString

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// console.log(caesarCipher('PIES1'))