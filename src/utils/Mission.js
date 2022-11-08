class Mission {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
    this.missionConsole = require("@woowacourse/mission-utils").Console;
    this.MESSAGE_FOR_VICTORY = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    this.MESSAGE_FOR_VICTORY_SCORE = "3스트라이크";
    this.MESSAGE_FOR_RESTART =
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    this.MESSAGE_FOR_RESTART_WRONG_INPUT =
      "잘못된 입력입니다. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
  }
}

module.exports = Mission;
