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
      return line;
    });
  }

  generateAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  constructor() {
    this.answer = this.generateAnswer();
  }
}

module.exports = App;

const app = new App();
app.play();
