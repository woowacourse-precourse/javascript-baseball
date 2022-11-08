const MissionUtils = require('@woowacourse/mission-utils');
const InputValidation = require('./utils/InputValidation');
const CompareNumber = require('./utils/CompareNumber');
const Console = MissionUtils.Console;
const {
  NUM_THREE,
  RESULT,
  RESTART_INPUT,
  MESSAGE,
} = require('./utils/Constants');

let computerNumber;
class App {
  play() {
    this.InputValidation = new InputValidation();
    this.printGreeting();
  }

  printGreeting() {
    Console.print(MESSAGE.START);
    this.setGame();
  }

  setGame() {
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    let randomNumSet = new Set();
    while (true) {
      randomNumSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
      if (randomNumSet.size === NUM_THREE) {
        break;
      }
    }
    computerNumber = Array.from(randomNumSet);
    this.getUserNumber();
  }

  getUserNumber() {
    let userNumber = [];
    Console.readLine(MESSAGE.INPUT, answer => {
      if (this.InputValidation.isValidInput(answer)) {
        userNumber = answer.split('').map(Number);
        this.printResult(userNumber);
      }
    });
  }

  printResult(userNumber) {
    const [strike, ball] = CompareNumber(computerNumber, userNumber);

    if (strike === 0 && ball === 0) {
      Console.print(RESULT.NOTHING);
    }
    if (strike > 0 && ball === 0) {
      Console.print(`${strike}${RESULT.STRIKE}`);
    }
    if (ball > 0 && strike === 0) {
      Console.print(`${ball}${RESULT.BALL}`);
    }
    if (ball > 0 && strike > 0) {
      Console.print(`${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`);
    }

    this.isCorrect(strike);
  }

  isCorrect(strike) {
    if (strike === NUM_THREE) {
      Console.print(MESSAGE.CORRECT);
      this.wantRestart();
    } else {
      this.getUserNumber();
    }
  }

  wantRestart() {
    Console.readLine(MESSAGE.RESTART, answer => {
      if (this.InputValidation.isValidRestartInput(answer)) {
        answer === RESTART_INPUT.RESTART ? this.setGame() : this.printClosing();
      }
    });
  }

  printClosing() {
    Console.print(MESSAGE.ENDING);
    Console.close();
  }
}

new App().play();

module.exports = App;
