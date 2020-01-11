//1. Make a function which will flat passed array i. e. : ``[1, [2, 3], [4, [5]]]` ->  [1, 2, 3, 4, 5].

const newArr = [];

function arrayConfig(array) {
  for (let value of array) {
    Array.isArray(value) ? value = arrayConfig(value) : newArr.push(value);
  }
  return newArr;
}
