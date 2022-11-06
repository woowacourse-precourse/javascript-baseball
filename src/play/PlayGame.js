const Mission = require("../utils/Mission");

class PlayGame extends Mission {
  constructor() {
    super();
    this.missionConsole.print("숫자 야구 게임을 시작합니다");
    this.userNumber = require("../input/GetUserInput");
  }

  gameStart() {
    const userInputNumbers = new this.userNumber();
    userInputNumbers.ready();
  }
}

module.exports = PlayGame;
