const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

class App {
  MESSAGES = {
    START: "숫자 야구 게임을 시작합니다.",
    END: "게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    INSERT_NUMBER: "숫자를 입력해주세요",
    CORRECT(count) {
      return `${count}개의 숫자를 모두 맞히셨습니다!`;
    },
    BALL(count) {
      return `${count}볼`;
    },
    STRIKE(count) {
      return `${count}스트라이크`;
    },
  };

  printMessage(msg) {
    return Console.print(msg);
  }

  play() {
    this.printMessage(this.MESSAGES.START);
  }
}

module.exports = App;
