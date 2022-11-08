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

}

module.exports = Input;
