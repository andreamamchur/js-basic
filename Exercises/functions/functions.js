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
const functionObject = {

  key() { return console.log('function object'); },
  key2: function () { return console.log('function object.variant 2'); }

}


//Get parameters amount of function `takeMyParametersAmount`.
function takeMyParametersAmount(one, two, three, ...others) {
  console.log(takeMyParametersAmount.length);
}

//Create a function and log all passed parameters to it. Check the `length` of this function.
function returnParameters(...arg) {
  console.log(arg);
  console.log(`Length - ${arg.length}`);
}

//Using anonymous function encapsulate function body from global scope.

(function () { console.log('encapsulates from global scope'); }());
