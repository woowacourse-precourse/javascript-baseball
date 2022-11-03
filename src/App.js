const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.getUserInputNumber = MissionUtils.Console.readLine("숫자를입력해주세요: ", (input) => {
      MissionUtils.Console.print(`입력하신 숫자는 ${input} 입니다.`);
      MissionUtils.Console.close();
    });
  }

  play() {
    this.getUserInputNumber;
  }

  generateComputerNumberArray() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = App;
