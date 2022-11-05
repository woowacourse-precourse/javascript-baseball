const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #computerAnswer = '';

  constructor() {
    this.message = '숫자 야구 게임을 시작합니다.';
  }

  #makeComputerAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
    this.#computerAnswer = answer;
  }

  play() {
    MissionUtils.Console.print(this.message);
  }
}

const app = new App();
app.play();

module.exports = App;
