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
function invoke(lam) {
  console.log(lam());
}

const lambda = function () { return 'foo'; };
invoke(lambda);

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
function returnParameters() {
  for (let i = 0; i < arguments.length; i++) {
    // eslint-disable-next-line prefer-rest-params
    console.log(arguments[i]);
  }
  console.log(`Length - ${arguments.length}`);
}

//Using anonymous function encapsulate function body from global scope.

(function () { console.log('encapsulates from global scope'); }());
