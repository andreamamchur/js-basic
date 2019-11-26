// Make a method in object which will use value from context.

const objectFunc = function () {
  console.log(`Our new employee has a ${this.position} position in ${this.department} and he/she is from ${this.country}`);
};

const obj = {
  position: 'QA',
  department: 'IT',
  country: 'Ukraine'
};

obj.func = objectFunc;

// Call this method on object. Save this method to new variable. Execute variable, context is loosed. Find a way to return object context to function.

obj.func();

const newFunc = obj.func;
newFunc();

newFunc.call(obj);
newFunc.apply(obj);

// Call function from previous task in other context.

const newObj = {
  position: 'Dev',
  department: 'Support',
  country: 'Poland'
};

newFunc.call(newObj);

// Write method in object which will use external context (add in external context some new property to use).

const object = {
  name: 'Ivan',
  objectFunc() {
    // eslint-disable-next-line no-undef
    const addSurname = () => {
      this.surname = 'Ivanov';
    };
    // eslint-disable-next-line no-undef
    addSurname();
  }
};

// Write a method in object which will return new object which will have method where it using context of parent object.

const newObject = {
  make: 'Honda',
  model: 'Accord',
  objectFunc() {
    return {
      car: () => `${this.make} ${this.model}`,
      color: 'Black'
    };
  }
};
