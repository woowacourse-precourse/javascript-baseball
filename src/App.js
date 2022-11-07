// 모듈 선언
const { Console, Random } = require('@woowacourse/mission-utils');
// 상수 선언
const INPUT_LENGTH = 3;
const START_DIGIT = 1;
const END_DIGIT = 9;

class App {
  #collectValidationFn;
  #collectCalculatorFn;

  constructor() {
    this.#collectValidationFn = Object.freeze({
      isNotThreeDigit: inputDigit => inputDigit.length !== INPUT_LENGTH,
      isNotOneToNineDigit: inputDigit =>
        isNaN(inputDigit) || inputDigit.toString().includes('0'),
      isDuplicates: inputDigit => {
        const arrForCheck = inputDigit.toString().split('');
        const setForCheck = new Set(arrForCheck);
        return arrForCheck.length !== setForCheck.size;
      },
    });
    this.#collectCalculatorFn = Object.freeze({
      isBall: (randomDigit, digit, idx) =>
        randomDigit.includes(digit) && randomDigit[idx] !== digit,
      isStrike: (randomDigit, digit, idx) =>
        randomDigit.includes(digit) && randomDigit[idx] === digit,
    });
  }

  setRandomDigit() {
    const randomDigit = new Set();
    while (randomDigit.size < INPUT_LENGTH) {
      randomDigit.add(Random.pickNumberInRange(START_DIGIT, END_DIGIT));
    }
    return Array.from(randomDigit);
  }

  setUserInput(randomDigit) {
    Console.readLine('숫자를 입력해주세요 : ', inputDigit => {
      const userDigit = [...this.isDigitValidation(inputDigit)].map(Number);
      const baseBallBoard = this.calcBaseBallDigit(userDigit, randomDigit);
      this.isThreeStrike(baseBallBoard)
        ? this.getRestartInput()
        : this.setUserInput(randomDigit);
    });
  }

  getRestartInput() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', isRestart => {
      if (isRestart === '1') return this.gameStart();
      else if (isRestart === '2') return this.gameEnd();
      else throw new Error('잘못된 값 입력됨');
    });
  }

  isThreeStrike(baseBallBoard) {
    const { strike, ball } = baseBallBoard;
    if (strike || ball) {
      Console.print(
        (ball ? `${ball}볼 ` : ``) + (strike ? `${strike}스트라이크` : ``),
      );
    } else {
      Console.print('낫싱');
    }
    return strike === INPUT_LENGTH;
  }

  calcBaseBallDigit(userDigit, randomDigit) {
    const { isStrike, isBall } = this.#collectCalculatorFn;
    const baseBallBoard = {
      strike: 0,
      ball: 0,
    };
    userDigit.forEach((digit, idx) => {
      if (isBall(randomDigit, digit, idx)) baseBallBoard.ball++;
      else if (isStrike(randomDigit, digit, idx)) baseBallBoard.strike++;
    });
    return baseBallBoard;
  }

  isDigitValidation(inputDigit) {
    const { isNotThreeDigit, isNotOneToNineDigit, isDuplicates } =
      this.#collectValidationFn;
    if (
      isNotThreeDigit(inputDigit) ||
      isNotOneToNineDigit(inputDigit) ||
      isDuplicates(inputDigit)
    )
      throw new Error('잘못된 값 입력됨');
    return inputDigit;
  }

  showStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  gameStart() {
    this.setUserInput(this.setRandomDigit());
  }

  gameEnd() {
    Console.print('게임 종료');
    Console.close();
  }

  play() {
    this.showStartMessage();
    this.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
