const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    // 3자리 숫자 모드
    this.NUMBER_LENGTH_MODE = 3;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (num) => {
      this.checkNum(num);
    });
  }

  checkNum(num) {
    this.checkValid(num);
  }

  checkValid(num) {
    const IS_VALID_LENGTH = num.length === this.NUMBER_LENGTH_MODE;
    const IS_TYPE_NUMBER = !Number.isNaN(num);

    const numSet = new Set(num);
    const IS_NO_DUPLICATE = num.length === numSet.size;

    const IS_VALID = IS_VALID_LENGTH && IS_TYPE_NUMBER && IS_NO_DUPLICATE;

    if (!IS_VALID) {
      throw new Error("올바르지 않은 입력");
    }
  }
}

module.exports = App;

const app = new App();
app.play();
