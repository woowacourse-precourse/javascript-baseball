const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const CheckValidation = require("./components/CheckValidation");
const CheckBallCount = require("./components/CheckBallCount");
const PrintBallCount = require("./components/PrintBallCount");

const guideMessage = {
  startMsg: "숫자 야구 게임을 시작합니다.",
  processMsg: "숫자를 입력해주세요 : ",
  correctMsg: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  manageGameMsg: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  finishMsg: "게임 종료",
};

class App {
  constructor() {
    this.targetNumber = [];
  }
  makeRandomNumbers() {
    this.targetNumber = [];
    while (this.targetNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.targetNumber.includes(number)) {
        this.targetNumber.push(number);
      }
    }
  }
  play() {
    Console.print(guideMessage.startMsg);
    this.playGame();
  }
  playGame() {
    this.makeRandomNumbers();
    console.log(this.targetNumber); // 필히 삭제
    this.inputNumber(this.targetNumber);
  }

  inputNumber(targetNumber) {
    Console.readLine(guideMessage.processMsg, (answer) => {
      CheckValidation(answer);
      this.guessNumber(answer, targetNumber);
    });
  }
  guessNumber(answer, targetNumber) {
    let userGuessedNumber = answer.split("").map((v) => +v);
    let [ball, strike] = CheckBallCount(targetNumber, userGuessedNumber);
    PrintBallCount(ball, strike);
    strike > 2
      ? (Console.print(guideMessage.correctMsg), this.manageGame())
      : this.inputNumber(targetNumber);
  }

  manageGame() {
    Console.readLine(guideMessage.manageGameMsg, (answer) => {
      switch (answer) {
        case "1":
          this.reset();
          break;
        case "2":
          this.exit();
          break;
        default:
          this.manageGame();
      }
    });
  }
  reset() {
    this.playGame();
  }
  exit() {
    Console.print(guideMessage.finishMsg);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
