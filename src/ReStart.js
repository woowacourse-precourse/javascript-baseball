const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

class ReStart {
  getRestartInput() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        this.checkReStartInput(userInput);

        this.decideReStart(userInput);
      }
    );
  }

  checkReStartInput(userInput) {
    if (userInput === "1" || userInput === "2") {
      return true;
    }

    throw new Error("잘못된 입력입니다. 게임을 종료합니다.");
  }

  // 오타 수정
  decideReStart(userInput) {
    if (userInput === "1") {
      const app = new App();
      app.play();
    }

    if (userInput === "2") {
      MissionUtils.Console.close();
    }
  }
}

module.exports = ReStart;
