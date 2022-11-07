const MissionUtils = require('@woowacourse/mission-utils');

const MAX_ANSWER_COUNT = 3;

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const answer = this.setAnswer();
  }

  setAnswer() {
    const randomList = [];
    while (randomList.length < MAX_ANSWER_COUNT) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomList.includes(number)) {
        randomList.push(number);
      }
    }
    return randomList.join('');
  }
}

const app = new App();
app.play();

module.exports = App;
