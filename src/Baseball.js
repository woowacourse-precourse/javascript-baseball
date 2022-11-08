const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class Baseball {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumberSet = new Computer().pickRandomNumberSet();
  }
}

module.exports = Baseball;
