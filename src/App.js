const MissionUtils = require('@woowacourse/mission-utils');
const GameMessage = require('./Constants/gameMessage');
class App {
  #answer = '';
  userInput = '';

  constructor() {
    this.answer = '';
    this.result = '';
  }

  printWelcomeMessage() {
    MissionUtils.Console.print(GameMessage.WELCOME_MESSAGE);
  }

  answerGenerator() {
    const firstRange = 1;
    const lastRange = 9;
    const length = 3;
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      firstRange,
      lastRange,
      length
    );
    this.answer = randomNumber.join('');
  }

  getUserInput() {
    MissionUtils.Console.readLine(GameMessage.QUESTION_MESSAGE, (input) => {
      this.userInput = input;
    });
  }

  get userInput() {
    return this.userInput;
  }

  play() {
    this.printWelcomeMessage();
    this.answerGenerator();
    this.getUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
