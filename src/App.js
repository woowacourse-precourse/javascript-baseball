const Validator = require("./validator.js");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine(
      "각 자리 숫자가 1에서 9 사이인 서로 다른 세자리 숫자를 입력해주세요 : ",
      (userInput) => {
        const validator = new Validator(userInput.split(""));
        if (!validator.isValidInput()) throw new Error("입력값을 확인하세요.");
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
