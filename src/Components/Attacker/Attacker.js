class Attacker {
  constructor(ballGenerator) {
    this.ballGenerator = ballGenerator;
  }

  async ready() {
    return await this.ballGenerator.execute();
  }

  async throwTo(defender) {
    let isEnd = false;

    do {
      const BALL = await this.ready();
      isEnd = defender.isGameEnd(BALL);
    } while (!isEnd);
  }
}

module.exports = Attacker;
