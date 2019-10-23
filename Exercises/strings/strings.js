//Assign string with unicode to a variable.
const unicodeString1 = '\u{1F60D}';  //smile
const unicodeString2 = '\u{1F332}';  //tree
const unicodeString3 = '\u{1F354}';  //eat

//Declare a variable with string with escaped symbols.

const stringWithEscape = 'new line \n quote \' and backslash \\ and tab \t';

//Declare a variable which will contain name of your favourite animal.

const myAnimal = 'Bobik';

//Log a message `My favourite animal is ` with dynamic variable from previous task.

alert(`My favourite animal is ${myAnimal}`);

//Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.

const favouriteWriter = 'theodore dreiser';

function toCapitalize(string) {
    const index = string.indexOf(' ');
    return string[0].toUpperCase() + string.slice(1, index + 1) + string[index + 1].toUpperCase() + string.slice(index + 2);
}

//Declare a function which will receive password string. Check is password strong enough:
// should contain at least one capital letter;
// length no less than 8 characters.
// should contain at leas one special character.

function passwordCheck(password) {
    const specialCharacters = ['!', '_', '-', '%', '(', ')', '#', '*', '{', '}'];
    let specialCharacterCheck = false;

    for (const char of password) {
        if (specialCharacters.includes(char)) {
            specialCharacterCheck = true;
        }
    }
    if (password !== password.toLowerCase() && password.length > 7 && specialCharacterCheck) {
        return 'Valid password';
    }

    return 'Invalid password';
}

//Make function which will generate password suggestion based on passed password, and required strongest.

function passwordGeneration(password) {
    let newPassword = password;
    const specialCharacters = ['!', '_', '-', '%', '(', ')', '#', '*', '{', '}'];
    let specialCharacterCheck = false;

    for (const char of password) {
        if (specialCharacters.includes(char)) {
            specialCharacterCheck = true;
        }
    }

    if (!specialCharacterCheck) {
        newPassword += specialCharacters[Math.round(Math.random() * specialCharacters.length)];
    }

    if (password === password.toLowerCase()) {
        newPassword = password[0].toUpperCase() + password.slice(1);
    }

    if (password.length < 8) {
        for (let i = 0; i < (8 - password.length); i++) {
            newPassword += String.fromCodePoint(65 + Math.round(Math.random() * 26));
        }
    }

    return newPassword;
}
