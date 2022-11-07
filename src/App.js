const Computer = require("./computer");
const MissionUtils = require("@woowacourse/mission-utils");
const { outputMessage } = require("./util/text");

class App {
  constructor() {
    this.computer = null;
  }

  play() {
    const computer = Computer();

    MissionUtils.Console.print(outputMessage.Start);

    MissionUtils.Console.readLine(outputMessage.Enter, (number) =>
      this.playOneRound(computer, number)
    );

    return this;
  }

  playOneRound(computer, number) {
    const { isEnd, print } = computer.checkGameResult(number);
    MissionUtils.Console.print(print);

    switch (isEnd) {
      case true:
        MissionUtils.Console.print(outputMessage.End);
        this.endGame();
        break;

      case false:
        MissionUtils.Console.readLine(outputMessage.Enter, (number) =>
          this.playOneRound(computer, number)
        );
        break;
    }

    return this;
  }

  endGame() {
    MissionUtils.Console.print(outputMessage.Pick);

    MissionUtils.Console.readLine("", this.replayByNumber.bind(this));

    return this;
  }

  replayByNumber(number) {
    switch (number) {
      case "1":
        this.play();
        break;
      case "2":
        MissionUtils.Console.close();
    }
  }
}

module.exports = App;

const app = new App();
app.play();
