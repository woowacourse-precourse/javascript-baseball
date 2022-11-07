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
      this.printMessage(scoreMessage.countingScore(computerInputNumbers, userInputNumbers), computerInputNumbers);
    });
    computerInputNumbers;
  }

  printMessage(scoreMessage, computerNumbers) {
    this.missionConsole.print(scoreMessage);

    if (scoreMessage === this.MESSAGE_FOR_VICTORY_SCORE) {
      this.missionConsole.print(this.MESSAGE_FOR_VICTORY);
      this.askOpinionForRestart();
      return;
    }
    if (scoreMessage !== this.MESSAGE_FOR_VICTORY_SCORE) {
      this.gameStart(computerNumbers);
      return;
    }
  }

  askOpinionForRestart() {
    this.missionConsole.readLine(this.MESSAGE_FOR_RESTART, (opinion) => {
      if (opinion === "1") {
        this.gameReady();
        return;
      }
      if (opinion === "2") {
        this.missionConsole.close();
        return;
      }
      throw this.MESSAGE_FOR_RESTART_WRONG_INPUT;
    });
  }
}

module.exports = PlayGame;
