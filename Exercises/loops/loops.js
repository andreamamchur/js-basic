//Create object and iterate through it logging pairs `key` : `value`.

const myObject = {
  name: 'Nick',
  surname: 'Johnson',
  city: 'London'
};
// eslint-disable-next-line guard-for-in
for (const key in myObject) {
  console.log(`key: ${key}, value: ${myObject[key]}`);
}

//Filter array `arrayToFilter` from non numeric values and `NaN`.

const arrayToFilter = Array.from(new Array(1000), () => {
  const randomValue = Math.random();
  const isNumericValue = randomValue >= 0.21;

  if (isNumericValue) {
    return Math.floor(Math.random() * 10);
  }

  if (randomValue < 0.07) {
    return NaN;
  }

  if (randomValue > 0.07 && randomValue < 0.17) {
    return undefined;
  }

  return null;
});

//const newArray = arrayToFilter.filter(item => Number.isInteger(item));

let i = 0;

while (i < arrayToFilter.length) {
  if (!Number.isInteger(arrayToFilter[i])) {
    arrayToFilter.splice(i, 1);
    i--;
  }
  i++;
}

//Make while loop until sum of randomly generated values will be greater than `200` and save amount of iterations.

let sum = 0;
let iteration = 0;

while (sum < 200) {
  sum += Math.random();
  iteration++;
}
console.log(sum);
console.log(iteration);
