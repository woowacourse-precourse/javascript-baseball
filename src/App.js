const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    
    function sayStart() {
      console.log('숫자 야구 게임을 시작합니다.');
    };

    sayStart();
  }
}

let app = new App();
app.play();

module.exports = App;
