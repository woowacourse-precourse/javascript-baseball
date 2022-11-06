const Validator = require("./validator.js");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const validator = new Validator(userInput.split(""));
      console.log(validator.isValidInput());
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
