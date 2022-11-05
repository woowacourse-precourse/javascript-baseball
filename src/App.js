const MissionUtils = require("@woowacourse/mission-utils");
class User {
  inputValue;
  constructor(){
    this.input();
  }
  input(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.inputValue = answer;
    })
  }
}
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = App;