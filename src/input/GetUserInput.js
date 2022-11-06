const Mission = require("../utils/Mission");

class GetUserInput extends Mission {
  constructor() {
    super();
    this.valid = require("./UserInputValid");
    this.score = require("../play/GetScore");
    this.pcNum = require("./GetComputerInput");
  }

  getComputerNumbers() {
    return new this.pcNum().makeRandomNumbers();
  }

  ready() {
    this.init(this.getComputerNumbers());
  }

  init(computerNumbers) {
    console.log(computerNumbers);
    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userNumbers) => {
      if (this.checkInputValueValid(userNumbers)) {
        this.printMessage(this.getScoreMessage(computerNumbers, userNumbers), computerNumbers);
      }
    });
  }

  checkInputValueValid(userInputValue) {
    return new this.valid(userInputValue).checkValid();
  }

  getScoreMessage(computerNumbers, userNumbers) {
    const scoreMessage = new this.score(computerNumbers, userNumbers).compare();
    return scoreMessage;
  }

  printMessage(scoreMessage, computerNumbers) {
    this.missionConsole.print(scoreMessage);

    if (scoreMessage === "3스트라이크") {
      this.missionConsole.print(this.messageForVictory());
      this.askOpinionForRestart();
    }

    if (scoreMessage !== "3스트라이크") {
      this.init(computerNumbers);
    }
  }

  askOpinionForRestart() {
    this.missionConsole.readLine(this.messageForRestart(), (opinion) => {
      if (opinion === "1") {
        this.init(this.getComputerNumbers());
      } else if (opinion === "2") {
        this.missionConsole.close();
      } else {
        throw "잘못된 입력입니다. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
      }
    });
  }

  messageForVictory() {
    return "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  }

  messageForRestart() {
    return "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
  }
}

module.exports = GetUserInput;
