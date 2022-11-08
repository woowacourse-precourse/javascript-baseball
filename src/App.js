const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, NUMBER } = require("./Game");
const Computer = require("./Computer");
const Player = require("./Player");
const Referee = require("./Referee");

class App {
  constructor() {
    this.computer = new Computer();
    this.player = new Player();
    this.referee = new Referee();
  }

  playBall() {
    MissionUtils.Console.print(MESSAGE.START);
    this.play();
  }

  play() {
    const computerNumber = this.computer.makeRandomNumber();
    this.start(computerNumber);
  }

  start(computerNumber) {
    MissionUtils.Console.readLine(MESSAGE.INPUT, (userInput) => {
      const userNumber = this.player.makeUserNumber(userInput);
      const userInputValidation = this.player.validateInput(userNumber);

      if (userInputValidation === false) throw new Error(MESSAGE.ERROR);

      MissionUtils.Console.print(
        this.referee.ballCount(userNumber, computerNumber)
      );

      if (this.referee.ballCount(userNumber, computerNumber) === MESSAGE.OUT)
        this.end();
      if (this.referee.ballCount(userNumber, computerNumber) !== MESSAGE.OUT)
        this.start(computerNumber);
    });
  }

  restart() {
    this.play();
  }

  exit() {
    MissionUtils.Console.close();
  }

  end() {
    MissionUtils.Console.print(MESSAGE.END);
    MissionUtils.Console.readLine(MESSAGE.SELECT, (userInput) => {
      const userNumber = Number(userInput);

      if (userNumber === NUMBER.RESTART) this.restart();
      if (userNumber === NUMBER.EXIT) this.exit();
    });
  }
}

const numberbaseball = new App();
numberbaseball.playBall();

module.exports = App;
