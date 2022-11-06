const Mission = require("../utils/Mission");

class PlayGame extends Mission {
  constructor() {
    super();
    this.missionConsole.print("숫자 야구 게임을 시작합니다");
    this.userNumber = require("../input/GetUserInput");
    this.pcNumber = require("../input/GetComputerInput");
  }

  gameReady() {
    this.gameStart(new this.pcNumber().makeRandomNumbers());
  }

  gameStart(computerInputNumbers) {
    const scoreMessage = new this.userNumber();
    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userInputNumbers) => {
      this.printMessage(scoreMessage.init(computerInputNumbers, userInputNumbers), computerInputNumbers);
    });
    computerInputNumbers;
  }

  printMessage(scoreMessage, computerNumbers) {
    this.missionConsole.print(scoreMessage);

    if (scoreMessage === "3스트라이크") {
      this.missionConsole.print(this.messageForVictory());
      this.askOpinionForRestart();
      return;
    }
    if (scoreMessage !== "3스트라이크") {
      this.gameStart(computerNumbers);
      return;
    }
  }

  askOpinionForRestart() {
    this.missionConsole.readLine(this.messageForRestart(), (opinion) => {
      if (opinion === "1") {
        this.gameReady();
        return;
      }
      if (opinion === "2") {
        this.missionConsole.close();
        return;
      }
      throw "잘못된 입력입니다. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
    });
  }

  messageForVictory() {
    return "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  }

  messageForRestart() {
    return "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
  }
}

module.exports = PlayGame;
