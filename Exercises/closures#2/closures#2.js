//https://www.codewars.com/kata/understanding-closures-the-basics

function buildFun(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(() => i);
  }

  return result;
}

//partialArray

const add = (a, b) => a + b;

function partialApply(fn, ...args) {
  return fn.bind(null, args);
}

const add10 = partialApply(add, 10);

//https://www.codewars.com/kata/57ab606e53ba3339da0000a2

function sum(a, b) {
  if (b !== undefined) {
    return a + b;
  }
  return function (b) {
    return a + b;
  };
}

//https://www.codewars.com/kata/555a77eb65dd419534000016
function sometimes(fn) {
  let count = 0;

  return function () {
    // eslint-disable-next-line prefer-spread,prefer-rest-params
    return ++count && (count < 4 || count % 2) ? fn.apply(null, arguments) : 'hmm, I don\'t know!';
  };
}

// Write a function which will log sum of arguments passed using closures. Example:
function summ(a) {
  let currentSum = a;
  console.log(a)

  function f(b) {
    currentSum += b;
    console.log(currentSum)
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}
