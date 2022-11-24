const MissionUtils = require("@woowacourse/mission-utils");
const {MESSAGE, INPUT} = require("./constant");
const Computer = require("./Computer");
const EdgeCase = require("./EdgeCase");
const Compare = require("./Compare");
class App {
  constructor() {
    this.computer = new Computer().createNumber();
    this.edgeCase = new EdgeCase();
    this.compare = new Compare();
  }
  play() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
    this.start();
  }
  start() {
    const computer = this.computer;
    const user = [];
    let result = "";
    MissionUtils.Console.readLine(MESSAGE.INPUT_NUMBER, (answer) => {
      if (this.edgeCase.isValid(answer)) {
        answer.split("").forEach((x) => user.push(+x));
        result = this.compare.printHint(computer, user);
        MissionUtils.Console.print(result);
        if (result.split("\n")[1] == MESSAGE.THREE_STRIKE) {
          this.restartOrShutdown();
        } else this.start();
      }
    });
  }
  restartOrShutdown() {
    MissionUtils.Console.readLine(
      MESSAGE.INPUT_RETRY,
      (answer) => {
        if (answer === INPUT.RETRY) {
          this.computer = new Computer().createNumber();
          this.start();
        }
        if (answer === INPUT.END) {
          MissionUtils.Console.print(MESSAGE.GAME_END);
          MissionUtils.Console.close();
        }
        if (answer !== INPUT.RETRY && answer !== INPUT.END) this.restartOrShutdown();
      }
    );
  }
}
const app = new App();
app.play();
module.exports = App;
