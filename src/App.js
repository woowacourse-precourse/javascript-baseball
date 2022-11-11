const { Console } = require('@woowacourse/mission-utils');
const {
  GAME_STATUS,
  GAME_MESSAGE,
  ERROR_MESSAGE,
} = require('./constants/message.js');
const { strToArr, generateRandomNumber, validate } = require('./utils');

class App {
  constructor() {
    this.answer;
  }

  play() {
    Console.print(GAME_MESSAGE.START);
    this.init();
  }

  init() {
    this.answer = generateRandomNumber();
    console.log(this.answer);
    this.initUserInputInterface();
  }

  initUserInputInterface() {
    Console.readLine(GAME_MESSAGE.INPUT_NUMBERS, (input) => {
      if (validate(input)) {
        this.compareUserInputAndComputer(input);
      }
    });
  }

  compareUserInputAndComputer(input) {
    if (this.answer === input) {
      return this.printAnswerAndRestartPhrase();
    }

    const { ballCount, strikeCount } = this.countStrikeAndBall(input);
    this.printStrikeAndBall(ballCount, strikeCount);
    this.initUserInputInterface();
  }

  countStrikeAndBall(input) {
    let ballCount = 0;
    let strikeCount = 0;
    strToArr(input).forEach((number, index) => {
      number === this.answer[index]
        ? strikeCount++
        : number !== this.answer[index] && this.answer.includes(number)
        ? ballCount++
        : 0;
    });

    return { ballCount, strikeCount };
  }

  printStrikeAndBall(ballCount, strikeCount) {
    let result = '';
    if (!ballCount && !strikeCount) {
      result = '낫싱';
    }

    if (ballCount) {
      result += `${ballCount}볼 `;
    }

    if (strikeCount) {
      result += `${strikeCount}스트라이크`;
    }

    Console.print(result);
  }

  printAnswerAndRestartPhrase() {
    Console.print(GAME_MESSAGE.END);
    Console.print(GAME_MESSAGE.RESTART);
    Console.readLine('', (input) => {
      if (input === GAME_STATUS.RESTART) {
        this.init();
        return;
      }

      if (input === GAME_STATUS.END) {
        return;
      }

      Console.print(ERROR_MESSAGE.INVALID_STATUS_NUMBER);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
