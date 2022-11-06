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
    this.computerNum = [...randomNumberSet].join('');
    console.log(this.computerNum);
    return this.computerNum;
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.userInput = input.replace(/ /g, '');
      Console.print(this.userInput);
    });
    return this.userInput;
  }

  isStrike() {
    const { computerNum, userInput } = this;
    let strike = 0;
    computerNum.split('').forEach((num, idx) => {
      if (computerNum[idx] === userInput[idx]) {
        strike += 1;
      }
    });
    return strike || 0;
  }

  isBall() {
    const { computerNum, userInput } = this;
    let ball = 0;
    computerNum.split('').forEach((num, idx) => {
      if (
        computerNum[idx] !== userInput[idx] &&
        userInput.includes(computerNum[idx])
      ) {
        ball += 1;
      }
    });
    return ball || 0;
  }
}

module.exports = App;
