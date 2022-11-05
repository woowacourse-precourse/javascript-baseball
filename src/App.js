const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {

  }

  // 정답이 될 무작위 난수를 배열로서 생성하는 함수
  generateRandomAnswer() {
    const ANSWER = [];

    while (ANSWER.length < 3) {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!ANSWER.includes(RANDOM_NUM))
        ANSWER.push(RANDOM_NUM);
    }

    return ANSWER;
  }
}

const app = new App();

module.exports = App;
