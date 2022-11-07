const message = require('./MESSAGE');
const MissionUtils = require('@woowacourse/mission-utils');

class StrikeBall {
  constructor() {
    this.Strike = 0;
    this.Ball = 0;
    this.RANGE = 3;
  }

  InitStrikeBall() {
    this.Ball = 0;
    this.Strike = 0;
  }
  /*
  스트라이크 볼 판별
  */

  GetStrikeBall(UserInput, RandomNumber) {
    for (let i = 0; i < this.RANGE; i += 1) {
      if (UserInput[i] === RandomNumber[i]) {
        this.Strike += 1;
      } else if (
        UserInput[i] !== RandomNumber[i] &&
        RandomNumber.includes(UserInput[i])
      ) {
        this.Ball += 1;
      }
    }
  }

  /*
  스트라이크,볼 출력
  */
  PrintStrikeBall() {
    if (this.Strike === 0 && this.Ball > 0) {
      MissionUtils.Console.print(String(this.Ball) + message.BALL);
    } else if (this.Strike > 0 && this.Ball === 0) {
      MissionUtils.Console.print(String(this.Strike) + message.STRIKE);
    } else if (this.Strike === 0 && this.Ball === 0) {
      MissionUtils.Console.print(message.NOTHING);
    } else {
      MissionUtils.Console.print(
        String(this.Ball) +
          message.BALL +
          String(' ') +
          String(this.Strike) +
          message.STRIKE
      );
    }
  }
}

module.exports = StrikeBall;
