// Declare a variable on each type using two options: plain creation, creation with constructor.

//number
const number = 123;
const number2 = new Number('456'); //in this case the type is object

//string
const string = 'some string';
const string2 = new String('new string'); //in this case the type is object

//boolean
const booleanVariable = true;
const booleanVariable2 = new Boolean(false); //in this case the type is object and value = 'true'


//undefined
let undefinedVariable;

//null
const nullVariable = null;

//object
const object = {
    a: 1,
    b: 'text',
    c: { d: 'a', e: null }
};

// Use operator typeof on each of them.

console.log(typeof number);
console.log(typeof number2);
console.log(typeof string);
console.log(typeof string2);
console.log(typeof booleanVariable);
console.log(typeof booleanVariable2);
console.log(typeof undefinedVariable);
console.log(typeof nullVariable);
console.log(typeof object);

// Demonstrate object's references.

const objectWithReferences = {
    number: 333,
    string: 'some text',
    'long name': undefined,
    nullVariable: null,
    booleanVariable: false,
    object2: { a: 123, b: 'text' }
};

const objectWithReferencesNew = objectWithReferences;

objectWithReferences.number = 123.123;
objectWithReferences['long name2'] = 'text';

console.log(objectWithReferences);
console.log(objectWithReferencesNew);

// Demonstrate string's backticks features.

let stringWithBackticks = `new string with calculation ${1 + 3}`;
console.log(stringWithBackticks);

const key = 'name';
stringWithBackticks = `new string with ${key}`;
console.log(stringWithBackticks);

// Declare an array containing different data types.

const array = [123, 'string', false, null, undefined, { a: 1 }];

// Iterate through it and collect amount of each data type to object.

const typesCount = {};

for (let i = 0; i < array.length; i++) {
    if (typesCount[typeof array[i]] === undefined) {
        typesCount[typeof array[i]] = 0;
    }
    typesCount[typeof array[i]] += 1;
}
console.log(typesCount);
