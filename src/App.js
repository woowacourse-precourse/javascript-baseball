const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    this.isValidUserNumber = false;
    this.userNumber = 0;
  }

  play() {
    MissionUtils.Console.print(this.GAME_START_MESSAGE);
    App.getUserInputNumber();
  }

  static convertUserNumberToArray() {
    if (this.isValidUserNumber) return this.userNumber.toString().split("");
    return false;
  }

  static getUserInputNumber() {
    return MissionUtils.Console.readLine("숫자를입력해주세요: ", (input) => {
      MissionUtils.Console.print(`입력하신 숫자는 ${input} 입니다.`);
      this.isValidUserNumber = true;
      this.userNumber = input;
      MissionUtils.Console.close();
    });
  }

  static generateComputerNumberArray() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = App;

const app = new App();

console.log(app.play());
