const MissionUtils = require("@woowacourse/mission-utils");

function getRestartOption() {
  const COMMENT = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

  MissionUtils.Console.readLine(COMMENT, (input) => {
    if (input == 1) {
      const playBaseballGame = require("./playBaseballGame");
      playBaseballGame();
    }
    if (input == 2) {
      MissionUtils.Console.close();
    }
  });
}

module.exports = getRestartOption;
