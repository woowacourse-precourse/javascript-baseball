const MissionUtils = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const Messages = require("./Messages");
const { Console } = MissionUtils;
const {
  createUniqueNumbers,
  isNumber,
  hasDuplicateElmentInList,
  isEmptyInput,
  hasWhiteSpace,
} = Utils;

class App {
  _userNumber = null;
  _answer = null;
  _isPlaying = false;

  constructor(digit = 3, minNumber = 1, maxNumber = 9) {
    this.digit = digit;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
    this.MESSAGES = new Messages(digit, minNumber, maxNumber);
  }

  set isPlaying(boolean) {
    this._isPlaying = boolean;
  }

  get isPlaying() {
    return this._isPlaying;
  }

  set answer(number) {
    this._answer = number;
  }

  get answer() {
    return this._answer;
  }

  set userNumber(number) {
    this._userNumber = number;
  }

  get userNumber() {
    return this._userNumber;
  }

  isValidDigit(numbers) {
    return numbers.length === this.digit;
  }

  isValidNumber(number) {
    return number >= this.minNumber && number <= this.maxNumber;
  }

  endProgramWithError(message, err = Error) {
    throw new err(`${message}\n${this.MESSAGES.endProgram}`);
  }

  isValidUserNumberInput(input) {
    const numbers = input.split("").map(Number);

    if (isEmptyInput(input)) {
      this.endProgramWithError(this.MESSAGES.emptyError);
    }

    if (hasWhiteSpace(input)) {
      this.endProgramWithError(this.MESSAGES.whiteSpaceError);
    }

    if (!numbers.every(isNumber)) {
      this.endProgramWithError(this.MESSAGES.typeError, TypeError);
    }

    if (!this.isValidDigit(numbers)) {
      this.endProgramWithError(this.MESSAGES.digitError);
    }

    if (!numbers.every(this.isValidNumber.bind(this))) {
      this.endProgramWithError(this.MESSAGES.rangeError, RangeError);
    }

    if (hasDuplicateElmentInList(numbers)) {
      this.endProgramWithError(this.MESSAGES.duplicateError);
    }

    return true;
  }

  inputUserNumbers(input) {
    if (!this.isValidUserNumberInput(input)) {
      return;
    }

    this.userNumber = input.split("").map(Number);
    this.isPlaying = true;
  }
  restart(input) {
    const COMMANDS = {
      1: this.newGame.bind(this),
      2: this.exitGame.bind(this),
    };

    // TODO: 검증 부분 분리
    // TODO: 에러 메시지 정리

    if (isEmptyInput(input)) {
      this.endProgramWithError(this.MESSAGES.emptyError);
    }

    if (hasWhiteSpace(input)) {
      this.endProgramWithError(this.MESSAGES.whiteSpaceError);
    }

    if (!COMMANDS[input]) {
      this.endProgramWithError(this.MESSAGES.commandError);
    }
    COMMANDS[input]();
  }

  confirmRestart() {
    Console.readLine(this.MESSAGES.restart, this.restart.bind(this));
  }

  continueGame(input) {
    this.inputUserNumbers(input);
    this.compareNumbers();

    if (!this.isPlaying) {
      this.confirmRestart();
      return;
    }

    this.runGame();
  }

  getGameResult({ sameDigitCount, sameNumberCount }) {
    // TODO: 불필요한 console.log 제거
    console.log(this.answer);
    if (!sameDigitCount && !sameNumberCount) {
      return this.MESSAGES.resultNothing;
    }

    if (sameDigitCount === this.digit) {
      this.isPlaying = false;

      let result = this.MESSAGES.resultCorrect;
      result += this.MESSAGES.endGame;

      return result;
    }

    let result = `${this.MESSAGES.resultBall(sameNumberCount)}`;
    if (sameNumberCount && sameDigitCount) {
      result += " ";
    }
    result += `${this.MESSAGES.resultStrike(sameDigitCount)}`;

    return result;
  }

  compareNumbers() {
    let sameDigitCount = 0;
    let sameNumberCount = 0;

    this.userNumber.forEach((number, idx) => {
      if (number === this.answer[idx]) {
        sameDigitCount++;
        return;
      }

      if (this.answer.includes(number)) {
        sameNumberCount++;
      }
    });

    Console.print(this.getGameResult({ sameDigitCount, sameNumberCount }));
  }

  setAnswer() {
    this.answer = createUniqueNumbers({
      count: this.digit,
      minNumber: this.minNumber,
      maxNumber: this.maxNumber,
    });
  }

  runGame() {
    Console.readLine(
      this.MESSAGES.insertUserNumber,
      this.continueGame.bind(this)
    );
  }

  exitGame() {
    Console.print(this.MESSAGES.endProgram);
    Console.close();
  }

  newGame() {
    this.setAnswer();
    this.runGame();
  }

  startGame() {
    Console.print(this.MESSAGES.start);
    this.newGame();
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
