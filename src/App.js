const MissionUtils = require("@woowacourse/mission-utils");
class User {
  constructor(){
    console.log('유저 클래스 생성');
  }
}
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    new User();
  }
}

module.exports = App;