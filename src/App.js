const { CASE } = require("./constants/index.js");
const { generateRandomNumber } = require("./utils/number.js");
const {
  isAnswer,
  isNothing,
  isValidUserAskInput,
  isValidUserInput,
} = require("./utils/validator");
const MissionUtils = require("@woowacourse/mission-utils");

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
    this.requestUserInputNumber();
  }

  proceedGame(userInputResult) {
    const [_, strike] = userInputResult;
    const hint = this.getHintMessage(userInputResult);
    this.showMessage(hint);
    if (isAnswer(strike)) return this.askRestartOrEndGame();
    return this.requestUserInputNumber();
  }

  endGame() {
    MissionUtils.Console.close();
  }

  askRestartOrEndGame() {
    this.showMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInputNumber) => {
        if (!isValidUserAskInput(userInputNumber))
          throw new Error("인풋 값이 유효하지 않습니다.");
        if (userInputNumber === CASE.RESTART) this.startGame();
        else this.endGame();
      }
    );
  }

  requestUserInputNumber() {
    MissionUtils.Console.readLine(
      "숫자를 입력해주세요 : ",
      (userInputNumber) => {
        if (!isValidUserInput(userInputNumber))
          throw new Error("인풋 값이 유효하지 않습니다.");
        this.proceedGame(this.getUserInputResult(userInputNumber));
      }
    );
  }

  setRandomNumber() {
    this.randomNumber = generateRandomNumber();
  }

  showMessage(message) {
    MissionUtils.Console.print(message);
  }

  getUserInputResult(input) {
    return input.split("").reduce(this.compareUserInput.bind(this), [0, 0]);
  }

  getHintMessage(userInputResult) {
    const message = [];
    const [ball, strike] = userInputResult;
    if (isNothing(userInputResult)) return CASE.NOTING;
    if (isAnswer(strike)) return CASE.ALL_STRIKE;
    if (ball) message.push(this.getBallHintMessage(ball));
    if (strike) message.push(this.getStrikeHintMessage(strike));
    return message.join(" ");
  }

  getBallHintMessage(ball) {
    return `${ball}${CASE.BALL}`;
  }

  getStrikeHintMessage(strike) {
    return `${strike}${CASE.STRIKE}`;
  }

  compareUserInput(acc, cur, index) {
    const [ball, strike] = acc;
    if (this.randomNumber[index] === cur) return [ball, strike + 1];
    if (this.randomNumber.includes(cur)) return [ball + 1, strike];
    return acc;
  }
}

module.exports = App;
