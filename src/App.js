const Computer = require('./Computer');
const Interaction = require('./Interaction');
const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./Message');
const { Console, Random } = MissionUtils;
const error = require('./Error');

class App {
  play() {
    const [computer, interaction] = this.start();
    Console.print(MESSAGE.STARTGAME);
    Console.print(computer.number);
    this.playOneSet(computer, interaction);
    this.AskNewGame();
  }

  start() {
    const computer = new Computer();
    const interaction = new Interaction();
    return [computer, interaction];
  }

  playOneSet(computer, interaction) {
    Console.readLine(MESSAGE.PLAYONE, (inputNumber) => {
      interaction.checkValidNumberInput(inputNumber);
      Console.print('passed');
      const resultMap = computer.getResultMap(inputNumber);
      Console.print(resultMap);
      const result = computer.getResultMessage(resultMap);
      Console.print(result);
      if (result === MESSAGE.ENDGAME) {
        this.AskNewGame();
      }
      return this.playOneSet(computer, interaction);
    });
  }

  AskNewGame() {
    Console.readLine(MESSAGE.NEWGAME, (inputAnswer) => {
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
