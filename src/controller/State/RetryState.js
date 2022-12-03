const Game = require("../../model/Game");
const State = require("./State");
const Console = require("@woowacourse/mission-utils").Console;

class RetryState extends State {
  baseballGame;

  constructor(baseballGame) {
    super();
    this.baseballGame = baseballGame;
  }

  tryMatch(command) {
    throw new Error("[ERROR] 지금은 매치할 시기가 아니야");
  }

  retry(command) {
    if (command === "1") {
      this.baseballGame.referee.chargeGame(new Game());
      this.baseballGame.state = this.baseballGame.ingState;
      return true;
    }
    if (command === "2") return false;
  }
}

module.exports = RetryState;
