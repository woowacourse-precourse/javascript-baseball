const MissionUtils = require("@woowacourse/mission-utils");

function getRestartOption() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (input) => {
      if (input == 1) {
        // 다시 시작
      }
      if (input == 2) {
        // 종료
      }
    }
  );
}

module.exports = getRestartOption;
