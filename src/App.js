const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    PrintGameStartPhrase();

  }
}

// 기능 1
function PrintGameStartPhrase() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}



const baseballGame = new App();
baseballGame.play();

module.exports = App;