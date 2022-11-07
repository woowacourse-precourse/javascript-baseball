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
    this.gameStart();
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

  gameStart() {
    MissionUtils.Console.readLine(messages.ENTER_USER_NUMBER_MESSAGE, (input) => {
      this.getUserNumber(input);
      MissionUtils.Console.close();
    });
  }

  getUserNumber(input) {
    this.userNumber = Number(input);
  }
}
const app = new App();
app.play();

module.exports = App;
