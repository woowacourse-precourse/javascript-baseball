const Message = require("./message/message");
const getAnswer = require("./createAnswer");
const playGame = require("./playGame");

class App {
  play() {
    let playing = true;
    while (playing) {
      const answer = getAnswer();
      playing = playGame(answer);
    }
  }
}

const app = new App();
console.log(Message.START);
app.play();

module.exports = App;
