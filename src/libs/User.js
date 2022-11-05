const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/index");

class User {
  constructor() {
    this.inputValue = "";
  }

  getInputValue() {
    this.setInputValue();
    return this.inputValue;
  }

  setInputValue() {
    Console.readLine(MESSAGE.INPUT, (inputValue) => {
      this.inputValue = inputValue;
    });
  }
}

module.exports = User;
