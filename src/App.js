const { Console } = require("@woowacourse/mission-utils");
const {
  makeAnswer,
  replyCheckAnswer,
  makeReplyToReply,
  replyValidation,
} = require("./util.js");

const EXIT = "2";
class App {
  play() {
    const answer = makeAnswer();
    const playing = (n) => {
      replyValidation(n);
      const replyInfo = replyCheckAnswer(n, answer);
      const { message, done } = makeReplyToReply(replyInfo);
      this.print(message);
      done ? this.exit() : this.reply(playing);
    };
    this.reply(playing);
  }

  print(message) {
    Console.print(message);
  }
  reply(cb) {
    Console.readLine("숫자를 입력해주세요 : ", (n) => cb(n));
  }

  exit() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => (input === EXIT ? this.close() : this.play())
    );
  }

  close() {
    Console.close();
  }
}

module.exports = App;
