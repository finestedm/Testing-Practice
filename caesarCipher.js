const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetReversed = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

export function caesarCipher(string) {

    var reversedString = ''

    string.split('').forEach(letter => {
        const searchedLetter = alphabet.indexOf(letter);
        const searchedLetterReversed = alphabetReversed[searchedLetter];
        reversedString += searchedLetterReversed
    });

    return reversedString

}