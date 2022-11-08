const { Random, Console } = require("@woowacourse/mission-utils");
const { NUMBER } = require("../constants");
const Error = require("./error");

class Input {
  constructor() {
    this.value = [];
  }

  save(input) {
    Error.validate(input);
    this.clear(this.value);
    this.makeNumberArray(input).forEach((element) => this.value.push(element));
  }

  saveRandom() {
    this.save(
      this.makeRandomDiffNumberArray(NUMBER.START, NUMBER.END, NUMBER.TOTAL)
    );
  }

  clear() {
    this.value.length = 0;
  }

  makeNumberArray(input) {
    if (Array.isArray(input)) return input;
    return input.split("").map((value) => +value);
  }

  makeRandomDiffNumberArray(start, end, total) {
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
}

module.exports = Input;
