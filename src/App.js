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
    MissionUtils.Console.readLine(MESSAGE.INPUT_NUMBER, (answer) => {
      if (this.edgeCase.isValid(answer)) {
        this.user(answer);
      }  
    });
  }
  
  user(answer) {
    const user = [];
    answer.split("").forEach((x) => user.push(+x));
    const result = this.compare.printHint(this.computer, user);
    MissionUtils.Console.print(result);
    this.isStrike(result);
  }
    
  isStrike(result) {
    if (result.split("\n")[1] == MESSAGE.THREE_STRIKE) {
      this.restartOrShutdown();
    } else this.start();
  }

  restartOrShutdown() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY, (answer) => {
      if (answer === INPUT.RETRY) {
        return this.retry();
      }
      if (answer === INPUT.END) {
        return this.end();
      }
      this.restartOrShutdown()
    });
  }

  retry() {
    this.computer = new Computer().createNumber();
    this.start();
  }

  end() {
    MissionUtils.Console.print(MESSAGE.GAME_END);
    MissionUtils.Console.close();
  }
}
const app = new App();
app.play();
module.exports = App;
