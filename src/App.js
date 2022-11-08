const MissionUtils = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const { Console } = MissionUtils;
const { createUniqueNumbers, isNumber, hasDuplicateElmentInList } = Utils;

class App {
  constructor(count = 3, minNumber = 1, maxNumber = 9) {
    this.count = count;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
    this.MESSAGES = {
      START: "숫자 야구 게임을 시작합니다.",
      END: "게임 종료",
      RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      INSERT_NUMBER: `${this.count}자리 숫자(각 자리 수: ${this.minNumber}~${this.maxNumber})를 입력해주세요 : `,
      ERROR: {
        INSERT: "올바르지 않은 입력입니다.",
        RANGE: `\n각 자리의 수는 ${this.minNumber}부터 ${this.maxNumber}까지 입력할 수 있습니다.`,
        TYPE: "\n숫자만 입력할 수 있습니다.",
        DIGIT: `\n${this.count}자리 수가 입력되어야 합니다.`,
        DUPLICATE: "\n각 자리의 수는 중복되지 않아야 합니다.",
        END: "\n프로그램을 종료합니다.",
      },
      RESULT: {
        NOTHING: "낫싱",
        CORRECT: `${this.count}개의 숫자를 모두 맞히셨습니다!`,
        BALL(num) {
          return (num && `${num}볼`) || "";
        },
        STRIKE(num) {
          return (num && `${num}스트라이크`) || "";
        },
      },
    };
  }

  set isPlaying(boolean) {
    this._isPlaying = boolean;
  }

  get isPlaying() {
    return this._isPlaying;
  }

  set gameNumber(number) {
    this._gameNumber = number;
  }

  get gameNumber() {
    return this._gameNumber;
  }

  set userNumber(number) {
    this._userNumber = number;
  }

  get userNumber() {
    return this._userNumber;
  }

  isValidDigit(numbers) {
    return numbers.length === this.count;
  }

  isValidNumber(number) {
    return number >= this.minNumber && number <= this.maxNumber;
  }

  isValidUserNumberInput(input) {
    const numbers = input.split("").map(Number);

    if (!numbers.every(isNumber)) {
      throw new TypeError(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.TYPE}${this.MESSAGES.ERROR.END}`
      );
    }

    if (!this.isValidDigit(numbers)) {
      throw new Error(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.DIGIT}${this.MESSAGES.ERROR.END}`
      );
    }

    if (!numbers.every(this.isValidNumber.bind(this))) {
      throw new RangeError(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.RANGE}${this.MESSAGES.ERROR.END}`
      );
    }

    if (hasDuplicateElmentInList(numbers)) {
      throw new Error(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.DUPLICATE}${this.MESSAGES.ERROR.END}`
      );
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

    if (!COMMANDS[input]) {
      throw new Error(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.END}`
      );
    }
    COMMANDS[input]();
  }

  confirmRestart() {
    Console.readLine(this.MESSAGES.RESTART, this.restart.bind(this));
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
    console.log(this.gameNumber);
    if (!sameDigitCount && !sameNumberCount) {
      return this.MESSAGES.RESULT.NOTHING;
    }

    if (sameDigitCount === this.count) {
      this.isPlaying = false;

      let result = this.MESSAGES.RESULT.STRIKE(sameDigitCount);
      result += "\n";
      result += this.MESSAGES.RESULT.CORRECT;
      result += this.MESSAGES.END;

      return result;
    }

    let result = `${this.MESSAGES.RESULT.BALL(sameNumberCount)}`;
    if (sameNumberCount && sameDigitCount) {
      result += " ";
    }
    result += `${this.MESSAGES.RESULT.STRIKE(sameDigitCount)}`;

    return result;
  }

  compareNumbers() {
    let sameDigitCount = 0;
    let sameNumberCount = 0;

    this.userNumber.forEach((number, idx) => {
      if (number === this.gameNumber[idx]) {
        sameDigitCount++;
        return;
      }

      if (this.gameNumber.includes(number)) {
        sameNumberCount++;
      }
    });

    Console.print(this.getGameResult({ sameDigitCount, sameNumberCount }));
  }

  runGame() {
    Console.readLine(this.MESSAGES.INSERT_NUMBER, this.continueGame.bind(this));
  }

  exitGame() {
    Console.print(this.MESSAGES.END);
    Console.close();
  }

  newGame() {
    this.gameNumber = createUniqueNumbers({
      count: this.count,
      minNumber: this.minNumber,
      maxNumber: this.maxNumber,
    });

    this.runGame();
  }

  startGame() {
    Console.print(this.MESSAGES.START);
    this.newGame();
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
