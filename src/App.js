const MissionUtils = require("@woowacourse/mission-utils");
const { isThreeDigitNumberWithoutZero, hasNoRedundancy } = require("./utils.js");

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

  // 사용자의 입력이 올바른 입력인지 판단하는 함수
  isValidInput(input) {
    if (!isThreeDigitNumberWithoutZero(input)) return false;

    return hasNoRedundancy(input);
  }
}

const app = new App();

module.exports = App;
