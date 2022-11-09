const { Console } = require("@woowacourse/mission-utils");

class Defender {
  constructor(ballGenerator) {
    this.ballGenerator = ballGenerator;
    this.ball = this.ballGenerator.execute();
  }

  reportAbout(otherBall) {
    Console.print(this.ball.compareTo(otherBall));
  }

  isGameEnd(otherBall) {
    return this.ball.is3Strike(otherBall);
  }
}

module.exports = Defender;
