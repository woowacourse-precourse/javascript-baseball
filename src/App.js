const Game = require("../src/Game");
const Input = require("../src/Input");
const { Output, WELCOME_MESSAGE } = require("../src/Output");

class App {
  play() {
    Output.printToUser(WELCOME_MESSAGE);

    while (true) {
      const game = new Game();
      game.run();

      const userWantsReplay = Input.getReplayRequest();
      if (!userWantsReplay) break;
    }
  }
}

module.exports = App;
