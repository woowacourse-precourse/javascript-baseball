const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const computerNumber = this.createComputerNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요:", (userInput) =>
      this.checkInputValidation(userInput)
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
}

const app = new App();
app.play();

module.exports = App;
