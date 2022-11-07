const Computer = require('./Computer');
const Interaction = require('./Interaction');
const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./Message');
const { Console, Random } = MissionUtils;
const error = require('./Error');

class App {
  constructor() {
    Console.print(MESSAGE.STARTGAME);
  }

  play() {
    const computer = this.start();
    this.playSetOfGame(computer);
  }

  start() {
    return new Computer();
  }

  playSetOfGame(computer) {
    Console.readLine(MESSAGE.PLAYONE, (inputNumber) => {
      computer.checkValidationSetGameInput(inputNumber);
      // Console.print(computer.number);
      const resultMap = computer.getResultMap(inputNumber);
      const result = computer.getResultMessage(resultMap);
      Console.print(result);
      if (result === MESSAGE.ENDGAME) {
        this.AskNewGame(computer);
      }
      return this.playSetOfGame(computer);
    });
  }

  AskNewGame(computer) {
    Console.readLine(MESSAGE.NEWGAME, (inputAnswer) => {
      computer.checkValidationNewGameInput(inputAnswer);
      if (inputAnswer === '1') {
        this.play();
      } else {
        Console.close();
      }
    });
  }
}

module.exports = App;

const app = new App();
app.play();
