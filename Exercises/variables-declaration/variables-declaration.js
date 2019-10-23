// Declare a variable which will be encapsulated from global scope.

const variableGlobal = 'global'; //global
{
  const variableNotGlobal = 'not global'; // not global
}

function notGlobal() {
  var variableNotGlobal2 = 'not global';    // not global
}

// Declare a variable which will appear in global object.

var globalObject = 2;

// Declare two variables which will be same-names but contain different values.

let sameName = 1;
{
  sameName = 2;
}

// Declare a variable with hosting.

console.log(a);
var a = 3;
