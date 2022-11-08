const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    // this.computerNumber = "";
    this.computerNumberArr = [];
  }

  gameStartMessage() {
    return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerChoiceNumber() {
    this.computerNumber = "";
    for (var i = 0; i < 3; i++) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(RANDOM_NUMBER)) {
        this.computerNumber += `${RANDOM_NUMBER}`;
      }
    }
    this.computerNumberArr = this.computerNumber
      .toString()
      .split("")
      .map((x) => parseInt(x));
  }

  userInputMessage() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      MissionUtils.Console.print(userInput);
      this.checkInputError(userInput);
    });
  }

  checkInputError(input) {
    var inputArr = input.split("").map((x) => parseInt(x));

    if (inputArr.length != 3) {
      throw new Error("입력 오류입니다.");
    }
    for (var inputNumber of inputArr) {
      if (inputNumber < 1) {
        throw new Error("입력 오류입니다.");
      }
    }
    const INPUT_SET = new Set(inputArr);
    if (INPUT_SET.size != inputArr.length) {
      throw new Error("입력 오류입니다.");
    }
  }

  play() {
    this.gameStartMessage();
    this.computerChoiceNumber();
    this.userInputMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
