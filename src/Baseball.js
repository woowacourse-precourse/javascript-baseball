const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class Baseball {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumberSet = new Computer().pickRandomNumberSet();
  }

  playGame() {
    Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      userNumber = new User().getUserArray(userNumber);
    });
  }
}

module.exports = Baseball;
