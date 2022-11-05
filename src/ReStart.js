const MissionUtils = require("@woowacourse/mission-utils");

class ReStart {
  getRestartInput() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        this.checkReStartInput(userInput);

        this.deciedReStart(userInput);
      }
    );
  }

  checkReStartInput(userInput) {
    if (userInput === "1" || userInput === "2") {
      return true;
    }

    throw new Error("잘못된 입력입니다. 게임을 종료합니다.");
  }

  deciedReStart(userInput) {
    if (userInput === "1") {
      this.play();
    }

    if (userInput === "2") {
      MissionUtils.Console.close();
    }
  }
}

module.exports = ReStart;
