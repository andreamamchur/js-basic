// Write a function which parses incoming JSON string to object
// and return it in format { parsed: true, data: ... }.
// If there is an error during parsing function should return object that contain
// 'parsed' key with false value and 'error' key with error message.

function json(json) {
  try {
    return {
      parsed: 'true',
      data: JSON.parse(json)
    };
  } catch (er) {
    return {
      parsed: 'false',
      error: er.name
    };
  }
}

// Write a function which stringifies only Objects that does not contain arrays.
// If input is not an object function should throw error with message 'Input is not a object'.
// If input contains arrays (in any nested key) function should throw error
// with message 'I hate arrays. Please provide another object'.

function stringify(object) {
  try {
    const result = JSON.stringify(object);

    for (const key in object) {
      if (Array.isArray(object[key])) {
        throw new Error('I hate arrays. Please provide another object');
      }
    }

    if (typeof object !== 'object') {
      throw new Error('Input is not a object');
    }
    return result;
  } catch (error) {
    return error.message;
  }
}
//https://www.codewars.com/kata/is-the-date-today/javascript

function isToday(date) {
  let today = new Date();
  return (today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate())
