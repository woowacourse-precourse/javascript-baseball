class GameController {
  basball;

  constructor(basball) {
    this.basball = basball;
  }

  gameStart() {
    this.basball.ballThrow();
  }
}

module.exports = GameController;
