const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    repeatGame(makeRandomNumbers());
  }
}


// Test를 위한 exports 코드
module.exports = App;
