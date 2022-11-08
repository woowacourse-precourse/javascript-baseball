const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, RESULT, USER_CHOICE } = require("./constants");
const { Input } = require("./utils");

class App {
  constructor() {
    this.user = new Input();
    this.computer = new Input();
    this.result = {};
  }

  clear() {
    this.result = {};
  }

  update(kind) {
    if (this.result[kind]) this.result[kind] += 1;
    else this.result[kind] = 1;
  }

  play() {}
}

module.exports = App;
