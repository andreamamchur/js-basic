//https://www.codewars.com/kata/classy-classes/train/javascript

class Person {
  constructor(name, age) {
    this.info = `${name}s age is ${age}`;
  }
}

//https://www.codewars.com/kata/53f0f358b9cb376eca001079

class Ball  {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}

//Inheritance
//https://www.codewars.com/kata/super-class-extensions/train/javascript

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise,`;
  }
}

class Cat extends Animal {
  speak() {
    return `${super.speak()} ${this.name} goes meow.`;
  }
}

//https://www.codewars.com/kata/basic-subclasses-adam-and-eve/train/javascript

//https://www.codewars.com/kata/interactive-dictionary/train/javascript

//Getters
//https://www.codewars.com/kata/fun-with-es6-classes-number-3-cuboids-cubes-and-getters/train/javascript'


//Super cool
//https://www.codewars.com/kata/create-the-base-dungeon-crawler-number-1/train/javascript
