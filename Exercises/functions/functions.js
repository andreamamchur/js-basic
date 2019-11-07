//Create a function declaration, function expression, lambda function, and using function object.

//function declaration
function declarationFunction() {
  alert('my first function');
}

//function expression
const expressionFunction = function () {
  alert('expression function');
};

//lambda function
const lambda = () => alert('lambda function');

//function object
// eslint-disable-next-line no-new-func
const functionObject = new Function('console.log("function was created using constructor")');


//Get parameters amount of function `takeMyParametersAmount`.
function takeMyParametersAmount(one, two, three, ...others) {
  return takeMyParametersAmount.length;
}

//Create a function and log all passed parameters to it. Check the `length` of this function.
function returnParameters(...arg) {
  console.log(arg);
  console.log(`Length - ${returnParameters.length}`);
}

//Using anonymous function encapsulate function body from global scope.

(function () { console.log('encapsulates from global scope'); }());
