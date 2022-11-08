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
}

module.exports = Input;
