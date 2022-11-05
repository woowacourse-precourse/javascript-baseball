const Computer = require('./Computer');
const Interaction = require('./Interaction');
const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  play() {
    const [computer, interaction] = this.start();
    this.oneGame(computer, interaction);
  }

  start() {
    const computer = new Computer();
    const interaction = new Interaction();
    return [computer, interaction];
  }

  async oneGame(computer, interaction) {
    while (true) {
      const input = await interaction.printPlayInputMessage();
      try {
        interaction.checkValidNumberInput(input);
      } catch (error) {
        Console.print(error);
        Console.close();
        return;
      }
      Console.print(computer.number);
      Console.print(input);
      const resultMap = computer.getResultMap(input);
      Console.print(resultMap);
      const result = computer.computeResult(resultMap);
      Console.print(result);
      if (result === '정답입니다.') {
        break;
      }
    }
    const response = await interaction.printEndGameMEssage();

    if (response === '1') {
      this.play();
      return;
    }
    if (response === '2') {
      Console.close();
    }

    // .then(interaction.checkValidNumberInput)
    // .then((inputNumber) => {
    //   Console.print(computer.number);
    //   const resultMap = computer.getResultMap(inputNumber);
    //   Console.print(resultMap);
    //   const resultMessage = computer.computeResult(resultMap);
    //   Console.print(resultMessage);
    // if (resultMessage === '정답입니다.') {
    //   return new Promise((resolve, reject) => {
    //     Console.readLine(
    //       '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    //       (selection) => {
    //         Console.close();
    //         resolve(selection);
    //       }
    //     );
    //   });
    // }
    // })
    // // .then((selection) => {
    // //   if (selection === 1) {
    // //     Console.print('다시시작합니다.');
    // //   }
    // // })
    // .catch((error) => {
    //   Console.print(error);
    // });
  }
}

module.exports = App;

const app = new App();
app.play();
