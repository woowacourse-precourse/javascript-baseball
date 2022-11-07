const Computer = require('./Computer');
const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./Message');

class App {
  constructor() {
    Console.print(MESSAGE.STARTGAME);
  }

  play() {
    const computer = new Computer();
    // Console.print(computer.number);
    this.playSetOfGame(computer);
  }

  playSetOfGame(computer) {
    Console.readLine(MESSAGE.PLAYONE, (inputNumber) => {
      computer.checkValidationSetGameInput(inputNumber);
      const resultMap = computer.getResultMap(inputNumber);
      const result = computer.getResultMessage(resultMap);
      Console.print(result);
      if (result === MESSAGE.ENDGAME) {
        this.askNewGame(computer);
      }
      return this.playSetOfGame(computer);
    });
  }

  askNewGame(computer) {
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
