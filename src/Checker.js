const { Console } = require("@woowacourse/mission-utils");

class Checker {
  checkCorrect(targetNum, userNum) {
    if (targetNum === userNum) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }
  }
}

module.exports = Checker;
