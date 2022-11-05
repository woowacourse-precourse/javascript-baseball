const Computer = require('./Computer');
const Interaction = require('./Interaction');
const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
console.dir(MissionUtils);
class App {
  play() {
    const computer = new Computer();
    const interaction = new Interaction();
    // this.playOnePartGame(interaction);

    interaction
      .printPlayInputMessage()
      .then(interaction.checkValidNumberInput)
      .then((inputNumber) => {
        computer.setInputNumber(inputNumber);
        Console.print(computer.number);
        Console.print(computer.getResult(inputNumber));
      })
      .catch((error) => {
        Console.print(error);
      });
  }
  async playOnePartGame(interaction) {
    await interaction.printPlayMessage();
    await Console.print(interaction.answer);
  }
  start() {
    const computer = new Computer();
    const interaction = new Interaction();
  }
}

module.exports = App;
const app = new App();
app.play();
