// Make function which will take object and iterate through it's keys and log pairs `key` : `value` using Object's static methods.

function iterate() {
  // eslint-disable-next-line guard-for-in
  for (const key in this) {
    console.log(`${key}:${this[key]}`);
  }
}
