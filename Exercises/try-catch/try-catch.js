//1. Make a function which will throw error with chance 50%.

function error50() {
  const random = Math.random();
  if (random > 0.5) { throw new Error('Error. It\'s a pity'); }
  console.log('No error');
}

//2. Make function which will execute function above, handle error and increase counter of function execution.
// Counter hould save the value on each new function execution.

function exeFunc() {
  let count = 0;
  try {
    error50();
  } catch (error) {
    console.log(error.message);
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return function () {
      return count++;
    };
  }
}

