const Message = require("./message/message");
const MissionUtils = require("@woowacourse/mission-utils");
const getAnswer = require("./createAnswer");
const playGame = require("./playGame");

class App {
  play() {
    let playing = true;
    MissionUtils.Console.print(Message.START);
    while (playing) {
      const answer = getAnswer();
      playing = playGame(answer);
    }
    MissionUtils.Console.print(Message.END);
  }
}

module.exports = App;
