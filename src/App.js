const MissionUtils = require("@woowacourse/mission-utils");
const IsValidNumber = require('../src/IsValidNumber');

class App {

  constructor() {
    this.uniqueNumberList = [];
    // this.isValidNumber = new IsValidNumber();
  }

  getRandomNumber() {
    const MIN_RANGE = 1;
    const MAX_RANGE = 9;
    const randomNumber = new Set();
    while (randomNumber.size !== 3) {
      randomNumber.add(
        MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE)
      );
    }
    const uniqueNumberList = [...randomNumber];
    this.uniqueNumberList = uniqueNumberList;
    return uniqueNumberList;
  }

  userInput() {
    MissionUtils.Console.readLine(
      "숫자를 입력해주세요 : ",
      (userInputValue) => {
        IsValidNumber.IsValidUserInput(userInputValue);
        const InputNumber = userInputValue.split("").map((v) => parseInt(v,10));
        this.getHintCount(InputNumber);
      }
    );
  }

  getHintCount(userInput) {
    let COUNT_STRIKE = 0;
    let COUNT_DUPLICATION = 0;

    if (this.uniqueNumberList === userInput) COUNT_STRIKE = 3;

    for (let index = 0; index < this.uniqueNumberList.length; index++) {
      if (this.uniqueNumberList[index] === userInput[index]) COUNT_STRIKE++;
      if (userInput.includes(this.uniqueNumberList[index])) COUNT_DUPLICATION++;
    }
    const COUNT_BALL = COUNT_DUPLICATION - COUNT_STRIKE;
    this.printResult(COUNT_STRIKE, COUNT_BALL);
  }

  printResult(countStrike, countBall) {
    const printMessage = MissionUtils.Console.print;

    if (countStrike === 3)
      printMessage("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    if (countStrike === 0 && countBall === 0) printMessage("낫싱");
    if (countStrike > 0 && countBall > 0)
      printMessage(`${countBall}볼 ${countStrike}스트라이크`);
    if (countStrike > 0 && countBall === 0 && countStrike !== 3)
      printMessage(`${countStrike}스트라이크`);
    if (countStrike === 0 && countBall > 0) printMessage(`${countBall}볼`);

    this.isSuccessGame(countStrike);
  }

  isSuccessGame(strike) {
    if (strike === 3) {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (optionNumber) => {
          IsValidNumber.IsValidOptionNumber(optionNumber);
          this.reStart(optionNumber);
          this.gameExit(optionNumber);
        }
      );
    } else this.userInput();
  }

  reStart(reStartNumber) {
    const RESTART_NUMBER = "1";
    if (reStartNumber === RESTART_NUMBER) this.startGame();
  }

  gameExit(exitNumber) {
    const EXIT_NUMBER = "2";
    if (exitNumber === EXIT_NUMBER) {
      MissionUtils.Console.print("게임 종료");
      MissionUtils.Console.close();
    }
  }

  startGame() {
    this.getRandomNumber();
    this.userInput();
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }
}
const app = new App()
app.play()

module.exports = App;
