//Write a function which will receive numeric parameter n and will log it with delay of n seconds.

function log(n) {
  setTimeout(() => console.log(n), n * 1000);
}

//Write a function which receives two params: n and period and logs digits from n to 1 with interval of period ms. And then logs Let's go

function countDown(n, period) {
  let i = n;
  const out = setInterval(() => {
    if (i > 0) {
      console.log(i);
    }
    if (i === 0) {
      console.log('Let\'s go');
    }
    if (i === -1) {
      clearInterval(out);
    }
    i--;
  }, period);
}

//https://www.codewars.com/kata/get-key-slash-value-pairs-as-arrays/javascript

function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}

//https://www.codewars.com/kata/565b3542af398bfb50000003

//https://www.codewars.com/kata/5594463eaf1701909c0000d4

function arraySum(array) {
  return array.reduce((result, element) => result + (Array.isArray(element) ? arraySum(element) : isNaN(element) ? 0 : element));
}
