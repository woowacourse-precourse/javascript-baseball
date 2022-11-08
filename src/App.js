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
  _question = null;
  _answer = null;
  _isGameEnd = false;

  constructor(digit = 3, minNumber = 1, maxNumber = 9) {
    this.digit = digit;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
    this.MESSAGES = new Messages(digit, minNumber, maxNumber);
  }

  set isGameEnd(boolean) {
    this._isGameEnd = boolean;
  }

  get isGameEnd() {
    return this._isGameEnd;
  }

  set answer(number) {
    this._answer = number;
  }

  get answer() {
    return this._answer;
  }

  set question(number) {
    this._question = number;
  }

  get question() {
    return this._question;
  }

  endProgramWithError(message, err = Error) {
    throw new err(`${message}\n${this.MESSAGES.endProgram}`);
  }

  isValidInput(input) {
    if (isEmptyInput(input)) {
      this.endProgramWithError(this.MESSAGES.emptyError);
    }

    if (hasWhiteSpace(input)) {
      this.endProgramWithError(this.MESSAGES.whiteSpaceError);
    }

    return true;
  }

  isValidDigit(numbers) {
    return numbers.length === this.digit;
  }

  isValidRange(number) {
    return number >= this.minNumber && number <= this.maxNumber;
  }

  isValidQuestionInput(input) {
    const numbers = input.split("").map(Number);

    if (!numbers.every(isNumber)) {
      this.endProgramWithError(this.MESSAGES.typeError, TypeError);
    }

    if (!this.isValidDigit(numbers)) {
      this.endProgramWithError(this.MESSAGES.digitError);
    }

    if (!numbers.every(this.isValidRange.bind(this))) {
      this.endProgramWithError(this.MESSAGES.rangeError, RangeError);
    }

    if (hasDuplicateElmentInList(numbers)) {
      this.endProgramWithError(this.MESSAGES.duplicateError);
    }

    return true;
  }

  isValidCommandInput(input, commands) {
    if (!commands[input]) {
      this.endProgramWithError(this.MESSAGES.commandError);
    }

    return true;
  }

  setCurrentQuestion(input) {
    if (!this.isValidInput(input)) {
      return;
    }

    if (!this.isValidQuestionInput(input)) {
      return;
    }

    this.question = input.split("").map(Number);
  }

  compareNumbers() {
    let sameDigitCount = 0;
    let sameNumberCount = 0;

    this.question.forEach((number, idx) => {
      if (number === this.answer[idx]) {
        sameDigitCount++;
        return;
      }

      if (this.answer.includes(number)) {
        sameNumberCount++;
      }
    });

    return { sameDigitCount, sameNumberCount };
  }

  isNumberAnswer(sameDigitCount) {
    if (sameDigitCount !== this.digit) {
      return false;
    }

    return true;
  }

  determineGameResult() {
    const { sameDigitCount, sameNumberCount } = this.compareNumbers();

    if (!sameDigitCount && !sameNumberCount) {
      return this.MESSAGES.resultNothing;
    }

    if (!this.isNumberAnswer(sameDigitCount)) {
      const balls = this.MESSAGES.resultBall(sameNumberCount);
      const whiteSpace = (sameDigitCount && sameNumberCount && " ") || "";
      const strikes = this.MESSAGES.resultStrike(sameDigitCount);

      return balls + whiteSpace + strikes;
    }

    this.isGameEnd = true;

    return this.MESSAGES.resultCorrect;
  }

  announceGameResult() {
    const result = this.determineGameResult();

    Console.print(result);
  }

  restart(input) {
    const COMMANDS = {
      1: this.startNewGame.bind(this),
      2: this.endProgram.bind(this),
    };

    if (!this.isValidInput(input)) {
      return;
    }

    if (!this.isValidCommandInput(input, COMMANDS)) {
      return;
    }

    COMMANDS[input]();
  }

  confirmRestart() {
    Console.readLine(this.MESSAGES.restart, this.restart.bind(this));
  }

  setNewAnswer() {
    this.answer = createUniqueNumbers({
      count: this.digit,
      minNumber: this.minNumber,
      maxNumber: this.maxNumber,
    });

    this.isGameEnd = false;
  }

  continueGame(input) {
    this.setCurrentQuestion(input);
    this.announceGameResult();

    if (this.isGameEnd) {
      this.confirmRestart();
      return;
    }

    this.runGame();
  }

  runGame() {
    Console.readLine(this.MESSAGES.inputQuestion, this.continueGame.bind(this));
  }

  startNewGame() {
    this.setNewAnswer();
    this.runGame();
  }

  startGame() {
    Console.print(this.MESSAGES.start);
    this.startNewGame();
  }

  endProgram() {
    Console.print(this.MESSAGES.endProgram);
    Console.close();
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
