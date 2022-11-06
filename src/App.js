import BaseBallGame from "./BaseBallGame";

class App {
  play() {
    const baseBallGame = new BaseBallGame();
    baseBallGame.start();
  }
}

module.exports = App;
