const State = require("./State");

class IngState extends State {
  baseballGame;
  constructor(baseballGame) {
    super();
    this.baseballGame = baseballGame;
  }
  tryMatch(command) {
    const balls = command.split("").map((item) => +item);
    const judgement = this.baseballGame.referee.judge(balls);
    if (judgement.isAllStrike())
      this.baseballGame.state = this.baseballGame.retryState;
    return judgement.toString();
  }
  retry(command) {
    throw new Error("[ERROR] 지금은 다시 시도할 시기가 아니야");
  }
}

module.exports = IngState;
