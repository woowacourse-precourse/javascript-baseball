// 클래스 모듈 선언
const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const MESSAGE = require('../constants/gameMessage');
const { INPUT_LENGTH, GAME_RESTART, GAME_END } = require('../constants/gameSetting');

class App {
  #collectValidationFn;
  #computer;

  constructor () {
    this.#collectValidationFn = Object.freeze({
      isNotThreeDigit: (inputDigit) => inputDigit.length !== INPUT_LENGTH,
      isNotOneToNineDigit: (inputDigit) => isNaN(inputDigit) || inputDigit.toString().includes('0'),
      isDuplicates: (inputDigit) => {
        const arrForCheck = inputDigit.toString().split('');
        const setForCheck = new Set(arrForCheck);
        return arrForCheck.length !== setForCheck.size;
      },
    });
  }

  #setUserInput () {
    Console.readLine(MESSAGE.GAME.INPUT, (inputDigit) => {
      const userDigit = [...this.validationDigit(inputDigit)].map(Number);
      const { strike, ball }  = this.#computer.calcBaseBallDigit(userDigit);
      this.showBoard({ strike, ball });
      this.isThreeStrike(strike)
        ? this.getRestartInput()
        : this.#setUserInput();
    });
  }

  #showStartMessage () {
    Console.print(MESSAGE.GAME.START);
  }

  #gameStart () {
    this.#computer = new Computer();
    this.#setUserInput();
  }

  #gameEnd () {
    this.#computer = null;
    Console.print(MESSAGE.GAME.END);
    Console.close();
  }

  isThreeStrike (strike) {
    return strike === INPUT_LENGTH;
  }

  showBoard ({ strike, ball }) {
    if (strike || ball) {
      Console.print(
        (ball ? `${ball}볼 ` : '') + (strike ? `${strike}스트라이크` : ''),
      );
    } else Console.print('낫싱');
  }

  validationDigit (inputDigit) {
    const { isNotThreeDigit, isNotOneToNineDigit, isDuplicates } = this.#collectValidationFn;
    if (
      isNotThreeDigit(inputDigit)
      || isNotOneToNineDigit(inputDigit)
      || isDuplicates(inputDigit)
    ) throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    return inputDigit;
  }

  getRestartInput () {
    Console.print(MESSAGE.GAME.WIN);
    Console.print(MESSAGE.GAME.FINISH);
    Console.readLine('', (isRestart) => {
      if (isRestart === GAME_RESTART) return this.#gameStart();
      if (isRestart === GAME_END) return this.#gameEnd();
      throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    });
  }

  play () {
    this.#showStartMessage();
    this.#gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
