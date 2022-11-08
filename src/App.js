const game = require("./game/game");

class App {
  play() {
    game.Start();
    game.getUserInput(game.pickRandomNumber());
  }
}

module.exports = App;

const app = new App();
app.play();
