const GET_NUMBER = require("./CreateNumber");
const PLAY_GAME = require("./PlayGame");

class App {
  play() {
    const NUMBERS = GET_NUMBER();
    const INPUT_NUMBER = PLAY_GAME();
  }
}

const app = new App();
app.play();

module.exports = App;