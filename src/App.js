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

  play() {}
}

module.exports = App;
