const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");
const ErrorMsg = require("./ErrorMsg.js");

const QuestionText = Object.freeze({
  startText: "숫자 야구 게임을 시작합니다.",
  inputText: "숫자를 입력해주세요 : ",
  endText: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  redoText: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

class GameBuilder {
  setTargetLength(length) {
    this.setTargetLength = length;
    return this;
  }

  build() {
    return new Game(this.setTargetLength);
  }
}

class Game {
  constructor(targetLength) {
    this.targetLength = targetLength;

    this.target = undefined;

    this.io = MissionUtils.Console;
    this.io.print(QuestionText.startText);

    this.userInputArray = [];
    this.validation = new Validation(this.targetLength);
  }

  onInput(text, callback) {
    this.io.readLine(text, callback.bind(this));
  }

  init() {
    this.target = this.setTarget();
  }

  start(text, callback) {
    this.onInput(text, callback);
  }

  play() {
    this.init();
    this.start(QuestionText.inputText, this.onGame);
  }

  finish() {
    try {
      this.io.print(QuestionText.endText);
      this.start(QuestionText.redoText, this.isRestart);
    } catch {
      new Error(ErrorMsg.WarningEndMessage);
    }
  }

  onGame(input) {
    const isValid = this.validation.checkValidation(input);

    if (!isValid && !isValid[0]) throw isValid[1];

    this.userInputArray = this.inputToArray(input);

    const ball = this.countBall();
    const strike = this.countStrike();

    this.io.print(this.showResult(ball, strike));

    if (this.isCorrect(strike)) this.finish();

    this.start(QuestionText.inputText, this.onGame);
  }

  isCorrect(strike) {
    return strike === this.targetLength;
  }

  isRestart(input) {
    let value = parseInt(input);
    if (isNaN(value)) throw new Error(ErrorMsg.WarningEndMessage);

    switch (value) {
      case 1:
        this.play();
        break;
      case 2:
        this.io.close();
        break;
      default:
        throw new Error(ErrorMsg.NotValidValue);
    }
  }

  // game 관련
  countStrike() {
    let strike = 0;

    this.target.map((digit, index) => {
      if (digit === this.userInputArray[index]) strike++;
    });

    return strike;
  }

  countBall() {
    let ball = 0;

    this.userInputArray.map((digit, index) => {
      let targetIdx = this.target.indexOf(digit);

      if (targetIdx !== -1 && targetIdx !== index) ball++;
    });

    return ball;
  }

  showResult(ball, strike) {
    if (ball == 0 && strike == 0) return "낫싱";
    else if (ball > 0 && strike == 0) return `${ball}볼`;
    else if (ball == 0 && strike > 0) return `${strike}스트라이크`;

    return `${ball}볼 ${strike}스트라이크`;
  }

  setTarget() {
    const computer = [];
    while (computer.length < this.targetLength) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    console.log(computer);
    return computer;
  }

  inputToArray(input) {
    const array = [];

    while (input > 0) {
      array.unshift(input % 10);
      input = Math.floor(input / 10);
    }

    return array;
  }
}

module.exports = GameBuilder;
