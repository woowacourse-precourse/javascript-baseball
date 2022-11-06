const MissionUtils = require('@woowacourse/mission-utils');

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.computerNum = [];
    this.userInput = '';
  }

  play() {}

  createComputerNum() {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < 3) {
      randomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNum = [...randomNumberSet];
    return this.computerNum;
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.userInput = input;
      Console.print(this.userInput);
    });
    return this.userInput;
  }
}

module.exports = App;
