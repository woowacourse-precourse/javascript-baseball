const { Console } = require("@woowacourse/mission-utils");

class Attacker {
  constructor(ballGenerator) {
    this.ballGenerator = ballGenerator;
  }

  throwTo(defender, afterGameEndCallback) {
    this.ballGenerator.execute((ball) => {
      defender.reportAbout(ball);

      if (defender.isGameEnd(ball)) {
        afterGameEndCallback();
      }

      this.throwTo(defender, afterGameEndCallback);
    });
  }
}

module.exports = Attacker;
