const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

class FindAnswer {
  constructor() {
    this.strike = 0;
    this.ball = 0;
  }

  getAnswer(computerNum, userInput) {
    this.strike = 0;
    this.ball = 0;
    this.isStrike(computerNum, userInput);
    this.isBall(computerNum, userInput);

    const strikeText = this.strike ? `${this.strike}스트라이크` : '';
    const ballText = this.ball ? `${this.ball}볼` : '';

    if (this.strike || this.ball) {
      Console.print(`${ballText} ${strikeText}`.trim());
    } else {
      Console.print('낫싱');
    }

    return { strike: this.strike, ball: this.ball };
  }

  isStrike(computerNum, userInput) {
    computerNum.split('').forEach((num, idx) => {
      if (computerNum[idx] === userInput[idx]) {
        this.strike += 1;
      }
    });
  }

  isBall(computerNum, userInput) {
    computerNum.split('').forEach((num, idx) => {
      if (
        computerNum[idx] !== userInput[idx] &&
        userInput.includes(computerNum[idx])
      ) {
        this.ball += 1;
      }
    });
  }
}

module.exports = FindAnswer;
