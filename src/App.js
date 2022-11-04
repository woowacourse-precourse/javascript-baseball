const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    const computerNumber = this.createComputerNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요:", (answer) =>
      console.log(answer)
    );
  }
  createComputerNumber() {
    const eachNumberArray = [];
    while (eachNumberArray.length < 3) {
      let eachNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!eachNumberArray.includes(eachNumber)) {
        eachNumberArray.push(eachNumber);
      }
    }
    return eachNumberArray.join("");
  }
  play() {}
}

new App();

module.exports = App;
