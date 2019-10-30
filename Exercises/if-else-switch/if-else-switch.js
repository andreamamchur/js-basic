const codeToMissingComplexityElement = {
  0: 'length',
  1: 'capital letter',
  2: 'special character',
  3: 'cannot be empty'
};
let specialCharacterCheck = false;
const specialCharacters = ['!', '_', '-', '%', '(', ')', '#', '*', '{', '}'];
let arrayResult = [];

function getMissingComplexityElementCode(password) {
  for (const char of specialCharacters) {
    if (password.includes(char)) {
      specialCharacterCheck = true;
    }
  }

  if (password.length < 8) {
    arrayResult.push(0);
  }
  if (password === password.toLowerCase()) {
    arrayResult.push(1);
  }
  if (!specialCharacterCheck) {
    arrayResult.push(2);
  }
  if (password.length === 0) {
    arrayResult.push(3);
  }
}

function getErrorMessage(array) {
  for (const char of array) {
    // eslint-disable-next-line default-case
    switch (codeToMissingComplexityElement[char]) {
    case 'length':
      console.log('The length of the password is less than 8 characters');
      break;
    case 'capital letter':
      console.log('Password does not contain capital letter');
      break;
    case 'special character':
      console.log('Password does not contain special characters');
      break;
    case 'cannot be empty':
      console.log('Password can\'t be empty');
      break;
    }
  }
}
