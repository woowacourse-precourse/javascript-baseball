const { Console, Random } = require("@woowacourse/mission-utils");
const CheckValidation = require("./CheckValidation");
const CheckBallCount = require("./CheckBallCount");
const PrintBallCount = require("./PrintBallCount");
const { GUIDE_MESSAGE } = require("./constants");

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
    Console.print(GUIDE_MESSAGE.START_MSG);
    this.playGame();
  }
  playGame() {
    this.makeRandomNumbers();
    this.inputNumber(this.targetNumber);
  }

  inputNumber(targetNumber) {
    Console.readLine(GUIDE_MESSAGE.PROCESS_MSG, (answer) => {
      CheckValidation(answer);
      this.guessNumber(answer, targetNumber);
    });
  }

  guessNumber(answer, targetNumber) {
    let userGuessedNumber = answer.split("").map((v) => +v);
    let [ball, strike] = CheckBallCount(targetNumber, userGuessedNumber);
    PrintBallCount(ball, strike);
    strike > 2
      ? (Console.print(GUIDE_MESSAGE.CORRECT_MSG), this.manageGame())
      : this.inputNumber(targetNumber);
  }

  manageGame() {
    Console.readLine(GUIDE_MESSAGE.MANAGE_GAME_MSG, (answer) => {
      switch (answer) {
        case "1":
          this.reset();
          break;
        case "2":
          this.exit();
          break;
        default:
          throw GUIDE_MESSAGE.MANAGE_GAME_ERROR_MSG;
      }
    });
  }
  reset() {
    this.playGame();
  }
  exit() {
    Console.print(GUIDE_MESSAGE.FINISH_MSG);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
