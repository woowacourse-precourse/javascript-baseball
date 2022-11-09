class Attacker {
  constructor(ballGenerator) {
    this.ballGenerator = ballGenerator;
  }

  throwTo(defender) {
    this.ballGenerator.execute((ball) => {
      defender.reportAbout(ball);

      if (defender.isGameEnd(ball)) return;

      this.throwTo(defender);
    });
  }
}

module.exports = Attacker;
