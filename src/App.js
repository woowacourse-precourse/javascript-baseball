const { EXCEPTION } = require("./constants/index.js");
const { isValidUserInput, generateRandomNumber } = require("./utils/number.js");
const Console = require("./utils/console.js");

class App {
  constructor() {
    this.randomNumber;
    this.userInputNumber;
    this.showMessage("숫자 야구 게임을 시작합니다.");
  }

  play() {}

  setRandomNumber() {
    this.randomNumber = generateRandomNumber({
      start: EXCEPTION.MIN_NUMBER,
      end: EXCEPTION.MAX_NUMBER,
      count: EXCEPTION.VALID_NUMBER_LENGTH,
    });
  }

  showMessage(message) {
    Console.print(message);
  }

  getUserInputNumber() {
    Console.readLine("숫자를 입력해주세요 : ", (userInputNumber) => {
      if (!isValidUserInput(userInputNumber))
        throw new Error("인풋 값이 유효하지 않습니다.");
      this.userInputNumber = userInputNumber;
    });
  }
}

module.exports = App;
