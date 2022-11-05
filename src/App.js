const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START_MSG = '숫자 야구 게임을 시작합니다.';
const NUM_INPUT_MSG = '숫자를 입력해주세요 : ';
const INPUT_EXCEPTION_MSG = '입력 값 에러 !!!';

class App {
  play() {
    MissionUtils.Console.print(GAME_START_MSG);
    this.getPlayerInput();
  }

  hasNonNumber(str) {
    return (
      str.charCodeAt(0) < '0'.charCodeAt(0) ||
      str.charCodeAt(0) > '9'.charCodeAt(0) ||
      str.charCodeAt(1) < '0'.charCodeAt(0) ||
      str.charCodeAt(1) > '9'.charCodeAt(0) ||
      str.charCodeAt(2) < '0'.charCodeAt(0) ||
      str.charCodeAt(2) > '9'.charCodeAt(0)
    );
  }

  hasDuplicatedNumber(str) {
    return (
      str.charAt(0) === str.charAt(1) ||
      str.charAt(0) === str.charAt(2) ||
      str.charAt(1) === str.charAt(2)
    );
  }

  NumInputExceptionCheck(input) {
    if (
      input.length !== 3 ||
      this.hasNonNumber(input) ||
      this.hasDuplicatedNumber(input)
    )
      throw new Error(INPUT_EXCEPTION_MSG);
  }

  getPlayerInput() {
    MissionUtils.Console.readLine(NUM_INPUT_MSG, (line) => {
      this.NumInputExceptionCheck(line);
      this.input = line.split('');
      this.calScore();
    });
  }

  countBall() {
    if (this.input[0] === this.answer[1] || this.input[0] === this.answer[2])
      this.score.ball += 1;
    if (this.input[1] === this.answer[0] || this.input[1] === this.answer[2])
      this.score.ball += 1;
    if (this.input[2] === this.answer[0] || this.input[2] === this.answer[1])
      this.score.ball += 1;
  }

  countStrike() {
    if (this.input[0] === this.answer[0]) this.score.strike += 1;
    if (this.input[1] === this.answer[1]) this.score.strike += 1;
    if (this.input[2] === this.answer[2]) this.score.strike += 1;
  }

  calScore() {
    this.countBall();
    this.countStrike();
    // // Debug
    // MissionUtils.Console.print(this.answer);
    // MissionUtils.Console.print(this.score);
    this.printScore();
  }

  printScore() {
    let scoreMsg = '';
    if (this.score.ball > 0) scoreMsg += `${this.score.ball}볼`;
    if (this.score.strike > 0) {
      if (this.score.ball > 0) scoreMsg += ' ';
      scoreMsg += `${this.score.strike}스트라이크`;
    }
    if (this.score.ball === 0 && this.score.strike === 0) scoreMsg = '낫싱';
    MissionUtils.Console.print(scoreMsg);
  }

  generateAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
      .join('')
      .split('');
  }

  constructor() {
    this.answer = this.generateAnswer();
    this.score = { ball: 0, strike: 0 };
  }
}

module.exports = App;

const app = new App();
app.play();
