const { Console } = require("@woowacourse/mission-utils");

class User {
  constructor() {
    this.inputValue = "";
  }

  getInputValue() {
    this.setInputValue();
    return this.inputValue;
  }

  setInputValue() {
    Console.readLine("숫자를 입력해주세요 :", (inputValue) => {
      this.inputValue = inputValue;
    });
  }
}

module.exports = User;
