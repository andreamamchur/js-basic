//filter
function allNonConsecutive (arr) {
    return arr.filter((item, index) => index && arr[index - 1] !== item - 1).map((item, index) => ({i: arr.indexOf(item), n:item}));
}

//every
const isValid = (array, validator) => {
    return array.every(validator);
    }

//some
// I dont know how to solve this task using some ;(
const filterBlockedProducts = (products, blockedBrands) => {
    return products.filter((item) => !blockedBrands.includes(item.brand))
}

/*
filterBlockedProducts([
    {
        id: 1,
        name: 'TV',
        brand: 'LG',
    },
    {
        id: 2,
        name: 'Phone',
        brand: 'Samsung',
    },
    {
        id: 3,
        name: 'iPhone',
        brand: 'Apple',
    },
], ['Apple', 'Samsung']);

[
  {
    id: 1,
    name: 'TV',
    brand: 'LG',
  }
]
*/


//reduce
https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

    /*
    property-descripotors
    using https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    defined in object properties which will not be iterable with `for in`
    */

 //   const obj = { id: 1, name: 'Name' };


//find

let findFreeRoom = (rooms) => {
//    return rooms.find((item) => item.status === 'free').map((item) => ({name: item.name, floor: item.floor}))
// Why find().map() does not work

    return rooms.find((item) => item.status === 'free')
}

/*
findFreeRoom([
    {
        name: 'Andora',
        floor: 11,
        status: 'busy',
    },
    {
        name: 'Vatican',
        floor: 11,
        status: 'busy',
    },
    {
        name: 'Indonesia',
        floor: 11,
        status: 'free',
    },
    {
        name: 'China',
        floor: 11,
        status: 'free',
    },
]) //=> { name: 'Indonesia', floor: 11 }
*/

//https://www.codewars.com/kata/unique-numbers/train/javascript

function uniqueNumbers(numbersArray) {
    let newArray = [];
    numbersArray.forEach((item) => {
        if (!newArray.includes(item)) newArray.push(item)
    });
    return newArray;
}
