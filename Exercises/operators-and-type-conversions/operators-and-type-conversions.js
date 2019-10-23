// Get `100` using `+` operator and numeric value `10`.

const numberNew = +(10 + '0');

// You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.

const string = 'Amazon annual revenue of US$232.887 billion';
const revenueMonth = parseFloat(string.slice(string.indexOf('$') + 1)) / 12;

// Declare variable which will contain logs counter. Log few times with updating this value accordingly.

let counter = 0;
counter++;
console.log(counter);
++counter;
console.log(counter);
console.log(++counter);
