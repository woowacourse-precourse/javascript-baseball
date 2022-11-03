const Game = require("./Game");
class App {
  play() {
    const GAME = new Game();
  }
}
const newApp = new App();
newApp.play();

module.exports = App;
