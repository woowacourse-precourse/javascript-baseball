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
    Console.readLine(MESSAGE.PLAYONE, (inputNumber) => {
      interaction.checkValidNumberInput(inputNumber);
      Console.print('passed');
      const resultMap = computer.getResultMap(inputNumber);
      const result = computer.computeResult(resultMap);
    });
  }

  start() {
    const computer = new Computer();
    const interaction = new Interaction();
    return [computer, interaction];
  }

  async oneGame(computer, interaction) {}
}

module.exports = App;

const app = new App();
app.play();
