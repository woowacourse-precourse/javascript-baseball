const { EXCEPTION, CASE } = require("./constants/index.js");
const { isValidUserInput, generateRandomNumber } = require("./utils/number.js");
const Console = require("./utils/console.js");

class App {
  constructor() {
    this.randomNumber;
    this.userInputNumber;
  }

  play() {
    this.showMessage("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    this.setRandomNumber();
    this.getUserInputNumber()
      .then((userInputNumber) => this.getUserInputResult(userInputNumber))
      .then((userInputResult) => this.proceedGame(userInputResult));
  }

  proceedGame(userInputResult) {
    const [_, strike] = userInputResult;
    const hint = this.getHintMessage(userInputResult);
    this.showMessage(hint);
    if (this.isAnswer(strike))
      return this.askGame().then((userInputNumber) => {
        if (userInputNumber === "1") this.startGame();
        else this.endGame();
      });
    return this.getUserInputNumber()
      .then((userInputNumber) => this.getUserInputResult(userInputNumber))
      .then((userInputResult) => this.proceedGame(userInputResult));
  }

  endGame() {
    Console.close();
  }

  askGame() {
    this.showMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return new Promise((resolve, reject) =>
      Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (userInputNumber) => {
          if ((userInputNumber === "1") | (userInputNumber === "2"))
            resolve(userInputNumber);
          else reject("인풋 값이 유효하지 않습니다.");
        }
      )
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

  getHintMessage(userInputResult) {
    const message = [];
    const [ball, strike] = userInputResult;
    if (this.isNothing(userInputResult)) return CASE.NOTING;
    if (this.isAnswer(strike)) return "3스트라이크";
    if (ball) message.push(`${ball}${CASE.BALL}`);
    if (strike) message.push(`${strike}${CASE.STRIKE}`);
    return message.join(" ");
  }

  compareUserInput(acc, cur, index) {
    const [ball, strike] = acc;
    if (this.randomNumber[index] === cur) return [ball, strike + 1];
    if (this.randomNumber.includes(cur)) return [ball + 1, strike];
    return acc;
  }

  isNothing(userInputResult) {
    if (userInputResult.every((result) => result === 0)) return true;
    return false;
  }

  isAnswer(strike) {
    if (strike === 3) return true;
    return false;
  }
}

module.exports = App;
