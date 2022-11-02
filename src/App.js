const MISSIONUTIL = require("@woowacourse/mission-utils");
const CONSOLE = MISSIONUTIL.Console;

class App {
  play() {
    gameStartMessage();
  }
}

function gameStartMessage() {
  CONSOLE.print("숫자 야구 게임을 시작합니다.");
}

const app = new App();
app.play();


module.exports = App;
