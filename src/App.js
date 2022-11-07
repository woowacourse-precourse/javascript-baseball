const MissionUtils = require('@woowacourse/mission-utils');
const messages = require('./Constants.js');
class App {
  constructor() {
    this.userNumber = '';
    this.computerNumber = '';
    this.isGameRestart = true;
  }

  play() {
    this.printGameStartMessage();
    this.init();
    this.GameStart();
  }

  init() {
    this.computerNumber = this.createComputerNumber();
    this.isGameFinished = false;
  }

  printGameStartMessage() {
    MissionUtils.Console.print(messages.GAME_START_MESSAGE);
  }

  createComputerNumber() {
    let computerNumber = '';
    while (computerNumber.length !== 3) {
      let digit = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(digit)) computerNumber += digit;
    }
    return Number(computerNumber);
  }

  GameStart() {
    MissionUtils.Console.readLine(messages.ENTER_USER_NUMBER_MESSAGE, (input) => {
      MissionUtils.Console.close();
    });
  }
}
const app = new App();
app.play();

module.exports = App;
