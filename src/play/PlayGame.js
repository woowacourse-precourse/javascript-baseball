class PlayGame {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
    this.missionConsole = require("@woowacourse/mission-utils").Console;
    this.valid = require("../input/UserInputValid");
    this.score = require("./GetScore");
    this.pcNumber = require("../input/GetComputerInput");
  }

  getOtherPcNumber() {
    return new this.pcNumber().makeRandomNumbers();
  }

  gameStart(computerInputNumbers) {
    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userInputNumbers) => {
      if (new this.valid(userInputNumbers).checkValid()) {
        if (this.result(computerInputNumbers, userInputNumbers) !== "3스트라이크") {
          this.missionConsole.print(this.result(computerInputNumbers, userInputNumbers));
          return this.gameStart(computerInputNumbers);
        }
        if (this.result(computerInputNumbers, userInputNumbers) === "3스트라이크") {
          this.missionConsole.print(this.result(computerInputNumbers, userInputNumbers));
          this.missionConsole.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          return this.askRestart();
        }
      }
    });
  }

  askRestart() {
    this.missionConsole.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (userInputNumbers) => {
      if (userInputNumbers === "1") {
        return this.gameStart(this.getOtherPcNumber());
      } else if (userInputNumbers === "2") {
        return this.missionConsole.close();
      } else {
        throw "잘못 된 입력입니다. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
      }
    });
  }

  result(computerInputNumbers, userInputNumbers) {
    const scoreCount = new this.score(computerInputNumbers, userInputNumbers);
    return scoreCount.compare();
  }
}

module.exports = PlayGame;
