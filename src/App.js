const {
  EmptyInputException,
  WhiteSpaceInputException,
  DuplicateElementException,
  InvalidDigitException,
  InvalidCommandException,
  InputRangeException,
  InputTypeException,
} = require('./Error');
const Utils = require('./Utils');
const Messages = require('./Messages');
const MissionUtils = require('@woowacourse/mission-utils');

const {
  createUniqueNumbers,
  isNumber,
  hasDuplicateElmentInList,
  isEmptyInput,
  hasWhiteSpace,
} = Utils;
const { Console } = MissionUtils;

const RESTART_COMMAND = {
  NEW_GAME: '1',
  EXIT: '2',
};

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

  isValidInput(input) {
    if (isEmptyInput(input)) {
      throw new EmptyInputException();
    }

    if (hasWhiteSpace(input)) {
      throw new WhiteSpaceInputException();
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
    if (!this.isValidInput(input)) {
      return;
    }

    const numbers = input.split('').map(Number);

    if (!numbers.every(isNumber)) {
      throw new InputTypeException();
    }

    if (!this.isValidDigit(numbers)) {
      throw new InvalidDigitException(this.MESSAGES.digitError);
    }

    if (!numbers.every(this.isValidRange.bind(this))) {
      throw new InputRangeException(this.MESSAGES.rangeError);
    }

    if (hasDuplicateElmentInList(numbers)) {
      throw new DuplicateElementException();
    }

    return true;
  }

  isValidCommandInput(input) {
    if (!this.isValidInput(input)) {
      return;
    }

    const COMMANDS = Object.values(RESTART_COMMAND);

    if (!COMMANDS.includes(input)) {
      const VALID_COMMAND = COMMANDS.join(', ');

      throw new InvalidCommandException(
        `입력 가능한 명령어는 ${VALID_COMMAND}입니다.`
      );
    }

    return true;
  }

  setCurrentQuestion(input) {
    if (!this.isValidQuestionInput(input)) {
      return;
    }

    this.question = input.split('').map(Number);
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
      const whiteSpace = (sameDigitCount && sameNumberCount && ' ') || '';
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
      [RESTART_COMMAND.NEW_GAME]: this.startNewGame.bind(this),
      [RESTART_COMMAND.EXIT]: this.exitApp.bind(this),
    };

    if (!this.isValidCommandInput(input)) {
      return;
    }

    COMMANDS[input]();
  }

  confirmRestart() {
    const MESSAGE = `게임을 새로 시작하려면 ${RESTART_COMMAND.NEW_GAME}, 종료하려면 ${RESTART_COMMAND.EXIT}를 입력하세요.`;

    Console.readLine(MESSAGE, this.restart.bind(this));
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

  exitApp() {
    Console.print(this.MESSAGES.exitApp);
    Console.close();
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
