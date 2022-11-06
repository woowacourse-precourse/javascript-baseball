const MissionUtils = require('@woowacourse/mission-utils');
const GameMessage = require('./Constants/gameMessage');
class App {
  answer = '';
  userInput = '';
  result = '';

  constructor() {
    this.inputAssert = {
      assertLength: (input) => input.length === 3,
      assertInteger: (input) => Number.isInteger(+input),
      assertPositive: (input) => Math.sign(input) === 1,
    };
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
      const { assertLength, assertInteger, assertPositive } = this.inputAssert;

      if (!assertLength(input))
        throw Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
      if (!assertInteger(input))
        throw Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
      if (!assertPositive(input))
        throw Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);

      this.userInput = input;
    });
  }

  start() {
    this.answerGenerator();
    this.getUserInput();
  }

  play() {
    this.printWelcomeMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
