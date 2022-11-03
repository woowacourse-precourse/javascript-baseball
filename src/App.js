const { EXCEPTION } = require("./constants/index.js");
const { isValidUserInput, generateRandomNumber } = require("./utils/number.js");
const Console = require("./utils/console.js");

class App {
  constructor() {
    this.randomNumber;
    this.userInputNumber;
    this.showMessage("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.setRandomNumber();
    this.getUserInputNumber().then((userInputNumber) =>
      this.getUserInputResult(userInputNumber)
    );
  }

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
    return new Promise((resolve) =>
      Console.readLine("숫자를 입력해주세요 : ", (userInputNumber) => {
        if (!isValidUserInput(userInputNumber))
          throw new Error("인풋 값이 유효하지 않습니다.");
        resolve(userInputNumber);
      })
    );
  }

  getUserInputResult(input) {
    return input.split("").reduce(this.compareUserInput.bind(this), [0, 0]);
  }

  compareUserInput(acc, cur, index) {
    const [ball, strike] = acc;
    if (this.randomNumber[index] === cur) return [ball, strike + 1];
    if (this.randomNumber[index].includes(cur)) return [ball + 1, strike];
    return acc;
  }
}

const app = new App();
app.play();

module.exports = App;
