const { Random, Console } = require("@woowacourse/mission-utils");
const { NUMBER } = require("../constants");
const Error = require("./error");

class Input {
  constructor() {
    this.value = [];
  }

  clear() {
    this.value.length = 0;
  }

  makeNumberArray(input) {
    if (Array.isArray(input)) return input;
    return input.split("").map((value) => +value);
  }

  randomDiffNumberArray(start, end, total) {
    const array = [];
    while (array.length < total) {
      const random = Random.pickNumberInRange(start, end);
      const exist = array.indexOf(random) > -1;
      if (!exist) array.push(random);
    }

    return array;
  }

  print(message) {
    Console.print(message);
  }

  save(input) {
    Error.validate(input);
    this.clear(this.value);
    this.makeNumberArray(input).forEach((element) => this.value.push(element));
  }
}

module.exports = Input;
