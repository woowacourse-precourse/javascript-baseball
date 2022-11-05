const MissionUtils = require("@woowacourse/mission-utils");

class ReStart {
  decideReStart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        MissionUtils.Console.close();
      }
    );
  }
}

module.exports = ReStart;
