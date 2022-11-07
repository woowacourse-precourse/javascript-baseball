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
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(number)) {
        COMPUTER_NUMBER.push(number);
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
}

module.exports = App;
