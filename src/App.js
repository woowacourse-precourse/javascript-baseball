const MissionUtils = require('@woowacourse/mission-utils');
const GameMessage = require('./Constants/gameMessage');

const firstRange = 1;
const lastRange = 9;
const length = 3;

class App {
  #answer;
  #userInput;

  constructor() {
    this.#userInput = '';
    this.#answer = '';

    this.inputAssert = {
      assertLength: (input) => input.length === length,
      assertInteger: (input) => Number.isInteger(+input),
      assertPositive: (input) => Math.sign(input) === 1,
    };
  }

  get userInput() {
    return this.#userInput;
  }

  get answer() {
    return this.#answer;
  }

  printWelcomeMessage() {
    MissionUtils.Console.print(GameMessage.WELCOME_MESSAGE);
  }

  answerGenerator() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      firstRange,
      lastRange,
      length
    );
    this.#answer = randomNumber.join('');
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

      this.#userInput = input;

      this.end();
    });
  }

  end() {
    MissionUtils.Console.readLine(GameMessage.END_GAME_MESSAGE, (input) => {
      switch (input) {
        case GameMessage.RESTART_INPUT:
          this.#answer = '';
          this.start();
          break;
        case GameMessage.GAMEOVER_INPUT:
          MissionUtils.Console.print(GameMessage.GAMEOVER_MESSAGE);
          break;
        default:
          throw Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
      }
    });
  }

  start() {
    this.answerGenerator();
    this.getUserInput();
  }

  play() {
    this.printWelcomeMessage();
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
