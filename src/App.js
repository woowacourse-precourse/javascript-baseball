const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    gameStart();
    return 0;
  }
}

function gameStart(){
  
}

module.exports = App;
