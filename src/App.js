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
    this.result = {};

    this.resultAssert = {
      assertStrike: (number, index) => this.#answer[index] === number,
      assertBall: (number, index) =>
        this.#answer[index] !== number && this.#answer.includes(number),
    };

    this.inputAssert = {
      assertLength: (input) => {
        return input.length === length;
      },
      assertInteger: (input) => Number.isInteger(+input),
      assertOverlap: (input) => {
        const inputArray = [...input];
        const inputSet = new Set(inputArray);
        return inputSet.size < inputArray.length;
      },
      assertPositive: (input) => Math.sign(input) === 1,
      assertRange: (input) => {
        const inputArray = [...input];
        inputArray.map((number) => {
          return +number > 0 && +number < 10;
        });
      },
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
    while (this.#answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) this.#answer += `${number}`;
    }
    this.#answer = [...this.#answer];
  }

  getUserInput() {
    MissionUtils.Console.readLine(GameMessage.QUESTION_MESSAGE, (input) => {
      const {
        assertLength,
        assertInteger,
        assertPositive,
        assertOverlap,
        assertRange,
      } = this.inputAssert;

      if (assertRange(input))
        throw new Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
      if (assertOverlap(input))
        throw new Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
      if (!assertLength(input))
        throw new Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
      if (!assertInteger(input))
        throw new Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
      if (!assertPositive(input))
        throw new Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);

      this.#userInput = input;
      this.result = {};

      this.assertRule();
      this.printResult();
      this.end();
    });
  }

  assertRule() {
    const { result } = this;
    const { assertStrike, assertBall } = this.resultAssert;

    const userInputArray = [...this.#userInput];
    userInputArray.forEach((number, index) => {
      if (assertStrike(number, index)) result.strike = result.strike + 1 || 1;
      if (assertBall(number, index)) result.ball = result.ball + 1 || 1;
    });
  }

  printResult() {
    const { strike, ball } = this.result;

    const BALL_MESSAGE = ball ? `${ball}${GameMessage.BALL} ` : '';
    const STRIKE_MESSAGE = strike ? `${strike}${GameMessage.STRIKE} ` : '';
    const NOTHING_MESSAGE = !strike && !ball ? GameMessage.NOTHING : '';

    MissionUtils.Console.print(BALL_MESSAGE + STRIKE_MESSAGE + NOTHING_MESSAGE);
    if (strike === 3) {
      MissionUtils.Console.print(GameMessage.GAMEOVER_STRIKE_MESSAGE);
    } else {
      this.getUserInput();
    }
  }

  end() {
    MissionUtils.Console.readLine(GameMessage.END_GAME_MESSAGE, (input) => {
      switch (input) {
        case GameMessage.RESTART_INPUT:
          this.#answer = '';
          this.start();
          break;
        case GameMessage.GAMEOVER_INPUT:
          MissionUtils.Console.close();
          MissionUtils.Console.print(GameMessage.GAMEOVER_MESSAGE);
          break;
        default:
          MissionUtils.Console.close();
          throw new Error(GameMessage.WRONG_INPUT_ERROR_MESSAGE);
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
