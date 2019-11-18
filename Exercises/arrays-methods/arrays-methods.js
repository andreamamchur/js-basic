// Create a function - predicate which will return `true` if passed element present in array and `false` - if not.

function includes(array, element) {
  return array.includes(element);
}

// Create a function which will check that all array elements are even.

function checkEven(array) {
  return array.every((element) => element % 2 === 0);
}
// Create a function which will check that passed parameter is `array`;

function checkIsArray(array) {
  return Array.isArray(array);
}
// Create a function which will take `array`, `indexToInsert`, `element` and will insert passed element to provided index in array.

function insertElement(array, indexToInsert, element) {
  array.splice(indexToInsert, 0, element);
  return array;
}
