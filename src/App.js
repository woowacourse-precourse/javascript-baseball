const Message = require("./message/message");
const MissionUtils = require("@woowacourse/mission-utils");
const getAnswer = require("./createAnswer");
const playGame = require("./playGame");

class App {
  play() {
    let playing = true;
    console.log(Message.START);
    while (playing) {
      const answer = getAnswer();
      playing = playGame(answer);
    }
    MissionUtils.Console.print("게임 종료");
  }
}

module.exports = App;
