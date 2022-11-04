const MissionUtils = require('@woowacourse/mission-utils');

class App {
  firstPlay = true;

  baseballAnswer = [];

  findNewBaseballNumber(CHECK_SAME_NUMBER) {
    let newBaseballNumber = 0;
    do {
      newBaseballNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    } while (CHECK_SAME_NUMBER.has(newBaseballNumber));
    CHECK_SAME_NUMBER.add(newBaseballNumber);
    this.baseballAnswer.push(newBaseballNumber);
  }

  setBaseballAnswer() {
    this.baseballAnswer = []; // Clear the answer berfore starting a game.
    const CHECK_SAME_NUMBER = new Set();
    for (let count = 0; count < 3; count += 1) {
      this.findNewBaseballNumber(CHECK_SAME_NUMBER);
    }
  }

  play() {
    if (this.firstPlay) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    this.firstPlay = false;
    this.setBaseballAnswer();
  }
}

try {
  const app = new App();
  app.play();
} catch {
  MissionUtils.Console.close();
}

module.exports = App;
