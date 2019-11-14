//Make a function which will generate array with random length and random values.

function randomArray() {
  return Array.from(new Array(Math.floor(Math.random() * 100)), () =>  Math.floor(Math.random() * 10));
}

//Make a function which will take array and return copy of it.

function arrayCopy(array) {
  return array.slice();
}

//Make a function which will take array and element and return a index of element in array.

function indexOfElement(array, element) {
  return array.includes(element) ? `element has index #${array.indexOf(element)}` : 'no such element in array';
}

//Make function which will take two arrays and return association of them.

function arrayAssociation(array1, array2) {
  return array1.concat(array2);
}

//Make function that will change element in array by index using reference, and other one - pure function.

function arrayChange(array, index) {
  array.splice(index, 1, Math.floor(Math.random() * 100));
  return array;
}

function arrayChangePure(array, index) {
  const newArray = array.slice();
  newArray.splice(index, 1, Math.floor(Math.random() * 100));
  return newArray;
}
