const GET_NUMBER = require("./CreateNumber");
const PLAY_GAME = require("./PlayGame");

class App {
  play() {
    const NUMBERS = GET_NUMBER();
    let playing = true;
    while (playing) {
      playing = playGame(NUMBERS);
    }
  }
}

const app = new App();
app.play();

module.exports = App;