const { Console } = require("@woowacourse/mission-utils");
const {
  makeAnswer,
  inputReply,
  inputReplay,
  closePlay,
  replyCheckAnswer,
  makeReplyToReply,
  replyValidation,
} = require("./util.js");

class App {
  play() {
    const answer = makeAnswer();
    const playing = (n) => {
      if (replyValidation(n)) {
        const replyInfo = replyCheckAnswer(n, answer);
        const { message, done } = makeReplyToReply(replyInfo);
        Console.print(message);
        if (done) {
          inputReplay((input) => {
            if (input === "2") closePlay();
            else this.play();
          });
        } else {
          inputReply(playing);
        }
      }
    };
    inputReply(playing);
  }
}

module.exports = App;
