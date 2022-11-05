const getAnswer = require("./createAnswer");
const playGame = require("./playGame");

class App {
  play() {
    const answer = getAnswer();
    let playing = true;
    while (playing) {
      playing = playGame(answer);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
