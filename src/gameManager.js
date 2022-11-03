const MissionUtils = require("@woowacourse/mission-utils");

function gameManager() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (answer) => answer
  );
}

module.exports = gameManager;
