const Computer = require('./Computer');
const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./Message');

class App {
  constructor() {
    Console.print(MESSAGE.STARTGAME);
  }

  play() {
    const computer = new Computer();
    this.playMatch(computer);
  }

  playMatch(computer) {
    Console.readLine(MESSAGE.PLAYONE, (inputNumber) => {
      computer.checkValidationSetGameInput(inputNumber);
      const resultMessage = computer.computeMatchInput(inputNumber).getResultMessage();
      Console.print(resultMessage);

      if (resultMessage === MESSAGE.ENDGAME) {
        this.askNewGame(computer);
      }

      return this.playMatch(computer);
    });
  }

  askNewGame(computer) {
    Console.readLine(MESSAGE.NEWGAME, (inputAnswer) => {
      computer.checkValidationNewGameInput(inputAnswer);

      if (inputAnswer === '1') this.play();

      Console.close();
    });
  }
}

module.exports = App;

const app = new App();
app.play();
