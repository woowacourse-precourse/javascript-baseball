const MissionUtils = require('@woowacourse/mission-utils');

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.computerNum = [];
    this.userInput = '';
    this.strike = 0;
    this.ball = 0;
  }

  play() {}

  createComputerNum() {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < 3) {
      randomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNum = [...randomNumberSet].join('');
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
    computerNum.split('').forEach((num, idx) => {
      if (computerNum[idx] === userInput[idx]) {
        this.strike += 1;
      }
    });
    return this.strike || 0;
  }

  isBall() {
    const { computerNum, userInput } = this;
    computerNum.split('').forEach((num, idx) => {
      if (
        computerNum[idx] !== userInput[idx] &&
        userInput.includes(computerNum[idx])
      ) {
        this.ball += 1;
      }
    });
    return this.ball || 0;
  }

  getAnswer() {
    this.isStrike();
    this.isBall();
    const strikeText = this.strike ? `${this.strike}스트라이크` : '';
    const ballText = this.ball ? `${this.ball}볼` : '';
    if (strikeText || ballText) {
      return `${ballText} ${strikeText}`.trim();
    }
    return '낫싱';
  }
}

module.exports = App;
