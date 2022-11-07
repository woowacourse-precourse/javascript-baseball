const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");

const LENGTH = 3;

const QuestionText = Object.freeze({
  startText: "숫자 야구 게임을 시작합니다.",
  inputText: "숫자를 입력해주세요 : ",
  endText: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  redoText: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

class App {
  constructor() {
    this.io = MissionUtils.Console;
    this.io.print(QuestionText.startText);
    this.userInputArray = [];
    this.target = this.setTarget();
    this.validation = new Validation(LENGTH);
  }

  play() {
    this.start();
  }

  onInput(text, callback) {
    this.io.readLine(text, callback.bind(this));
  }

  start() {
    this.onInput(QuestionText.inputText, this.onGame);
  }

  finish() {
    try {
      this.io.print(QuestionText.endText);
      this.onInput(QuestionText.redoText, this.isRestart);
      // this.io.close();
    } catch {
      new Error("경고:게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    }
  }

  onGame(input) {
    this.userInputArray = this.validation.validation(parseInt(input));

    let ball = this.countBall();
    let strike = this.countStrike();

    this.io.print(this.showResult(ball, strike));

    if (strike === LENGTH) {
      this.finish();
    }

    this.onInput(QuestionText.inputText, this.onGame);
  }

  isRestart(input) {
    let value = parseInt(input);
    if (isNaN(value))
      throw new Error(
        "경고:게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

    switch (value) {
      case 1:
        this.target = this.setTarget();
        this.onInput(QuestionText.inputText, this.onGame);
        break;
      case 2:
        this.io.close();
        break;
      default:
        throw new Error("Not valid value");
    }
  }

  setTarget() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    console.log(computer);
    return computer;
  }

  // game 관련
  countStrike() {
    let count = 0;

    for (let i = 0; i < LENGTH; i++) {
      if (this.target[i] === this.userInputArray[i]) count++;
    }
    return count;
  }

  countBall() {
    let count = 0;

    for (let i = 0; i < LENGTH; i++) {
      if (
        this.target.includes(this.userInputArray[i]) &&
        this.target[i] !== this.userInputArray[i]
      )
        count++;
    }
    return count;
  }

  showResult(ball, strike) {
    if (ball == 0 && strike == 0) return "낫싱";
    else if (ball > 0 && strike == 0) return `${ball}볼`;
    else if (ball == 0 && strike > 0) return `${strike}스트라이크`;
    else return `${ball}볼 ${strike}스트라이크`;
  }
}

const app = new App();
app.play();

module.exports = App;
