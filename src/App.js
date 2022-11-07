const { Console } = require("@woowacourse/mission-utils");
const {
  makeBallCountString,
  getRandomThreeNumber,
  checkRestartInputValidation,
  checkBallInputValidation,
} = require("./libs");

const { MESSAGE, GAME } = require("./constansts");
const { WELCOME, INNIG_END, RESTART, INPUT } = MESSAGE;

class App {
  constructor() {
    this.inning = this.inning.bind(this);
    this.play = this.play.bind(this);
    this.computer;
  }
  askRestart() {
    Console.readLine(RESTART, (input) => {
      checkRestartInputValidation(input);
      if (input === GAME.OVER) return Console.close();
      this.computer = getRandomThreeNumber();
      this.inning();
    });
  }
  checkBallCount(number) {
    checkBallInputValidation(number);
    const ballCount = makeBallCountString(this.computer, number);
    Console.print(ballCount);
    if (ballCount === GAME.OUT) {
      Console.print(INNIG_END);
      this.askRestart();
    }
  }
  inning() {
    Console.readLine(INPUT, (input) => {
      checkBallInputValidation(input);
      this.checkBallCount(input);
      this.inning();
    });
  }
  play() {
    Console.print(WELCOME);
    this.computer = getRandomThreeNumber();
    this.inning();
  }
}

const app = new App();
app.play();

module.exports = App;
