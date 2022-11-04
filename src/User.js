const { Console } = require('@woowacourse/mission-utils');

class User {
  constructor() {
    this.userNumber = 0;
    this.playState = 0;
  }

  guessNumber() {
    Console.readLine('숫자를 입력해주세요: ', (userNumber) => {
      this.userNumber = userNumber;
      Console.close();
    });
  }

  getReplayNumber() {
    Console.readLine('숫자를 입력해주세요: ', (playState) => {
      Console.close();
      this.playState = playState;
    });
  }
}

module.exports = { User };
