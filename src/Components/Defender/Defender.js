const { Console } = require("@woowacourse/mission-utils");

class Defender {
  ball = null;

  constructor(ballGenerator) {
    this.ballGenerator = ballGenerator;
  }

  async ready() {
    this.ball = await this.ballGenerator.execute();
  }

  reportAbout(otherBall) {
    Console.print(this.ball.compareTo(otherBall));
  }

  isGameEnd(otherBall) {
    return this.ball.is3Strike(otherBall);
  }
}

module.exports = Defender;
