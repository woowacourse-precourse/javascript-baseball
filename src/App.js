const MissionUtils = require("@woowacourse/mission-utils");

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
    this.isFinish = false;
    this.target = this.setTarget();
  }

  play() {
    this.start();
  }

  onInput(text, callback) {
    this.io.readLine(text, callback.bind(this));
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

  start() {
    this.onInput(QuestionText.inputText, this.onGame);
  }

  // 유효성 검사
  validation(input) {
    if (isNaN(input)) throw new Error("정수 값을 입력해주세요!");

    const len = Math.ceil(Math.log10(input + 1));
    if (len !== 3) throw new Error("서로 다른 3자리의 수를 입력해주세요!");

    this.isDuplicate(input);

    if (input < 0) throw new Error("음수가 아닌 값을 입력해주세요.");
  }

  isDuplicate(input) {
    const checkArray = Array(10).fill(false);
    this.userInputArray = this.inputToArray(input);

    for (let i = 0; i < LENGTH; i++) {
      let idx = this.userInputArray[i];
      if (checkArray[idx]) throw new Error("중복이 있습니다!");

      checkArray[idx] = true;
    }
  }

  inputToArray(input) {
    const array = [];

    while (input > 0) {
      array.unshift(input % 10);
      input = Math.floor(input / 10);
    }

    return array;
  }

  // Game
  onGame(input) {
    // this.io.print(input);
    this.validation(parseInt(input));

    let ball = this.countBall();
    let strike = this.countStrike();

    if (strike === LENGTH) {
      this.finish();
    } else {
      this.io.print(this.showResult(ball, strike));
      this.onInput(QuestionText.inputText, this.onGame);
    }
  }

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
        this.target[i] !== this.userInputArray[i] &&
        this.target.includes(this.userInputArray[i])
      )
        count++;

      return count;
    }
  }

  showResult(ball, strike) {
    if (ball === 0 && strike === 0) return "낫싱";
    else if (ball > 0 && strike == 0) return `${ball}볼`;
    else if (ball == 0 && strike > 0) return `${strike}스트라이크`;
    else return `${ball}볼 ${strike}스트라이크`;
  }
}

const app = new App();
app.play();

module.exports = App;
