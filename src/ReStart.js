const MissionUtils = require("@woowacourse/mission-utils");

class ReStart {
  getRestartInput() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        this.checkReStartInput(userInput);
        MissionUtils.Console.close();
      }
    );
  }

  checkReStartInput(userInput) {
    if (userInput === "1" || userInput === "2") {
      return true;
    }

    throw new Error("잘못된 입력입니다. 게임을 종료합니다.");
  }
}

module.exports = ReStart;
