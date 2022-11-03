const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

class App {
  MESSAGES = {
    START: "숫자 야구 게임을 시작합니다.",
    END: "게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    INSERT_NUMBER: "숫자를 입력해주세요",
    NOTHING: "낫싱",
    CORRECT(num) {
      return `${num}개의 숫자를 모두 맞히셨습니다!`;
    },
    BALL(num) {
      return `${num}볼`;
    },
    STRIKE(num) {
      return `${num}스트라이크`;
    },
  };

  printMessage(msg) {
    return Console.print(msg);
  }

  startGame() {
    this.printMessage(this.MESSAGES.START);
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
