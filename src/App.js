const MissionUtils = require("@woowacourse/mission-utils");
class User {
  inputValue;
  constructor(){
    this.input();
    const game = new BaseBallGame();
  }
  input(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.inputValue = answer;
    })
  }
}

class BaseBallGame {
  answer;
  constructor(){
    this.init();
  }
  init(){
    answer = Array.from(Array(3),() => MissionUtils.Random.pickNumberInRange(1, 9));
  }
}

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    new User();
  }
}

module.exports = App;