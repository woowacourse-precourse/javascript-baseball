const {
  printGameStart,
  game,
  createComputerNumber,
} = require("./baseballGame");

class App {
  play() {
    printGameStart();
    game(createComputerNumber());
  }
}

module.exports = App;

const app = new App();
app.play();
