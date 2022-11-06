const Message = require("./message/message");
const MissionUtils = require("@woowacourse/mission-utils");
const getAnswer = require("./createAnswer");
const playGame = require("./playGame");
const $utils = MissionUtils.Console;

class App {
  play() {
    let playing = true;
    $utils.print(Message.START);
    while (playing) {
      const answer = getAnswer();
      playing = playGame(answer);
    }
    $utils.print(Message.END);
  }
}

const app = new App();
app.play();

module.exports = App;
