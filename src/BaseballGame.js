const utils = require("./utlils");

class BaseballGame {
  constructor() {
    this.targetNumber = utils.getTargetNumber();
  }

  startGame() {
    // 게임을 시작합니다. 그 과정에서 getTargetNumber를 통해서 값을 초기화 합니다.
    // startRound();
    // targetNumber을 찾을때 까지 round를 진행합니다.
    // targetNumber를 찾았다면 restart 로직을 추가합니다.
  }

  startRound() {
    // round를 시작합니다.
    // round에서는 사용자에게 입력을 받는 로직
    // 입력을 통해서 힌트를 출력하는 로직으로 구성이 되어 있습니다. (이 과정에서 오류를 관리합니다.)
  }
}

module.exports = BaseballGame;
