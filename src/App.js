const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  constructor(count = 3, minNum = 1, maxNum = 9) {
    this.count = count;
    this.minNum = minNum;
    this.maxNum = maxNum;
    this.MESSAGES = {
      START: "숫자 야구 게임을 시작합니다.",
      END: "게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
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
        CORRECT(num) {
          return `${num}개의 숫자를 모두 맞히셨습니다!`;
        },
        BALL(num) {
          return `${num}볼`;
        },
        STRIKE(num) {
          return `${num}스트라이크`;
        },
      },
    };
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

  printMessage(msg) {
    return Console.print(msg);
  }

  readLine(msg, callback) {
    return Console.readLine(msg, callback);
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

    if (!this.isValidDigit(numbers)) {
      throw new Error(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.DIGIT}${this.MESSAGES.ERROR.END}`
      );
    }

    if (!numbers.every(this.isNumber)) {
      throw new TypeError(
        `${this.MESSAGES.ERROR.INSERT}${this.MESSAGES.ERROR.TYPE}${this.MESSAGES.ERROR.END}`
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

  inputUserNumbers() {
    this.readLine(this.MESSAGES.INSERT_NUMBER, (input) => {
      if (!this.isValidInput(input)) {
        return;
      }

      this.userNumber = input.split("").map(Number);
    });
  }

  startGame() {
    this.printMessage(this.MESSAGES.START);
    this.createGameNumbers();
    this.inputUserNumbers();
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
