const MissionUtils = require("@woowacourse/mission-utils");
const COMPUTER_NUMBER = [];

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomComputerNumber();
    this.userInputNumber(COMPUTER_NUMBER);
  }

  randomComputerNumber() {
    while (COMPUTER_NUMBER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(NUMBER)) {
        COMPUTER_NUMBER.push(NUMBER);
      }
    }
  }

  userInputNumber(COMPUTER_NUMBER) {
    MissionUtils.Console.readLine(
      "숫자를 입력해주세요 : ",
      (userNumberInput) => {
        this.occurredError(userNumberInput);
        this.checkNumbers(COMPUTER_NUMBER, userNumberInput);
      }
    );
  }

  occurredError(userNumberInput) {
    if (userNumberInput.length != 3) {
      throw new Error("숫자는 3자리로 입력해야합니다.");
    }
    if (new Set(userNumberInput).size != 3) {
      throw new Error("서로 다른 숫자여야 합니다");
    }
  }
}

module.exports = App;
