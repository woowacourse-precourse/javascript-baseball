const { Console } = require("@woowacourse/mission-utils");

class User {
  constructor() {
    this.number = null;
  }

  checkNumber(input) {
    if (input.length !== 3) {
      throw new Error("3개의 숫자를 입력해주세요.");
    }
    if (new Set(input).size !== 3) {
      throw new Error("중복된 숫자는 입력할 수 없습니다.");
    }
    if (!/^[1-9]+$/g.test(input)) {
      throw new Error("숫자를 입력해주세요.");
    }
    return true;
  }

  setNumber() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (this.checkNumber(input)) {
        this.number = input.split("").map((v) => +v);
      }
    });
  }

  getNumber() {
    return this.number;
  }
}

module.exports = User;
