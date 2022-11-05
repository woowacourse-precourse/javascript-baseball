const MissionUtils = require("@woowacourse/mission-utils");
class User {
  inputValue;
  game;
  constructor() {
    this.input();
    this.game = new BaseBallGame();
  }
  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.inputValue = answer;
    })
  }
}

class BaseBallGame {
  answer;
  constructor() {
    this.init();
  }
  init() {
    this.answer = Array.from(Array(3),() => MissionUtils.Random.pickNumberInRange(1, 9));
  }
  numberToArray(inputValue) {
    return Array.from(inputValue.toString(),(num)=>Number(num));
  }
}

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    new User();
  }
}

new App().play();
module.exports = App;