const getAnswer = require("./createAnswer");
const playGame = require("./playGame");

class App {
  play() {
    const answer = getAnswer();
    const inputNum = playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
