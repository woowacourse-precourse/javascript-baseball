const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  constructor(count = 3, minNum = 1, maxNum = 9) {
    this.count = count;
    this.minNum = minNum;
    this.maxNum = maxNum;
    this.MESSAGES = {
      START: "숫자 야구 게임을 시작합니다.",
      END: "게임 종료",
      RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      INSERT_NUMBER: `${this.count}자리 숫자(각 자리 수: ${this.minNum}~${this.maxNum})를 입력해주세요 : `,
      ERROR: {
        INSERT: "올바르지 않은 입력입니다.\n",
        RANGE: `각 자리의 수는 ${this.minNum}부터 ${this.maxNum}까지 입력할 수 있습니다.`,
        TYPE: "숫자만 입력할 수 있습니다.",
        DIGIT: `${this.count}자리 수가 입력되어야 합니다.`,
        DUPLICATE: "각 자리의 수는 중복되지 않아야 합니다.",
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

  createUniqueNumberInList(array) {
    let pickedNumber = Random.pickNumberInRange(this.minNum, this.maxNum);

    while (array.includes(pickedNumber)) {
      pickedNumber = Random.pickNumberInRange(this.minNum, this.maxNum);
    }

    return pickedNumber;
  }

  createGameNumbers() {
    const gameNumbers = Array.from({ length: this.count }).reduce(
      (prev) => [...prev, this.createUniqueNumberInList(prev)],
      []
    );

    this.gameNumber = gameNumbers;
  }

  isValidDigit(numbers) {
    return numbers.length === this.count;
  }

  isNumber(number) {
    return typeof number === "number";
  }

  isValidNumber(number) {
    return number >= this.minNum && number <= this.maxNum;
  }

  hasDuplicateElement(list) {
    return [...new Set(list)].length !== list.length;
  }

  isValidInput(input) {
    const numbers = input.split("").map(Number);

    if (!numbers.every(this.isNumber)) {
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

    if (this.hasDuplicateElement(numbers)) {
      throw new Error(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.DUPLICATE}${this.MESSAGES.ERROR.END}`
      );
    }

    return true;
  }

  inputUserNumbers(input) {
    if (!this.isValidInput(input)) {
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

    console.log(input, "restart");
    COMMANDS[input]();
  }

  confirmRestart() {
    Console.print(this.MESSAGES.END);
    Console.readLine(this.MESSAGES.RESTART, this.restart.bind(this));
  }

  continueGame(input) {
    this.inputUserNumbers(input);
    this.compareNumbers();
    console.log(this.gameNumber);

    if (!this.isPlaying) {
      this.confirmRestart();
      return;
    }

    this.runGame();
  }

  runGame() {
    Console.readLine(this.MESSAGES.INSERT_NUMBER, this.continueGame.bind(this));
  }

  exitGame() {
    console.log("종료 테스트");
    return true;
  }

  getGameResult({ sameDigitCount, sameNumberCount }) {
    if (!sameDigitCount && !sameNumberCount) {
      return this.MESSAGES.RESULT.NOTHING;
    }

    if (sameDigitCount === this.count) {
      this.isPlaying = false;

      let result = this.MESSAGES.RESULT.STRIKE(sameDigitCount);
      result += "\n";
      result += this.MESSAGES.RESULT.CORRECT;

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

  newGame() {
    this.createGameNumbers();
    this.runGame();
  }

  startGame() {
    // TODO: 첫 게임에만 MESSAGES.START표시하기
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
