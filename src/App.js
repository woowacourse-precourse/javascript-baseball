const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const computerNumber = this.createComputerNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요:", (userInput) => {
      if (this.checkInputValidation(userInput)) {
      } else {
        MissionUtils.Console.close();
      }
    });
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

  checkInputValidation(userInput) {
    if (userInput.length < 3) return;
    else if (new Set(userInput).size !== 3) return;
    else if (userInput.includes("0")) return;
    return true;
  }
}

const app = new App();
app.play();

module.exports = App;
