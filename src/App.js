const MissionUtils = require("@woowacourse/mission-utils");
const { isThreeDigitNumberWithoutZero, hasNoRedundancy, getInputFromConsole } = require("./utils.js");
const { updateStrikeOrBall } = require("./compare.js");

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

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

  /**
   * 사용자의 입력이 올바른 입력인지 판단하는 함수
   * @param {*} input - input string
   * @returns boolean
   */
  isValidInput(input) {
    if (!isThreeDigitNumberWithoutZero(input)) return false;

    return hasNoRedundancy(input);
  }

  /**
   * input과 정답을 비교하여 야구게임 결과를 반환하는 함수
   * @param {*} input - input string
   * @param {*} answer - answer array
   */
  getResult(input, answer) {
    let result = { strike: 0, ball: 0 };

    for (let i = 0; i < answer.length; i++) {
      updateStrikeOrBall(input, i, answer, result);
    }

    return result;
  }

  /**
   * 비교 결과를 콘솔에 양식에 맞춰 출력하는 함수
   * @param {*} result - 비교 결과를 담은 딕셔너리
   */
  printCompareResult(result) {
    let message = "";
    if (result.ball > 0) message += `${result.ball}볼 `; // 볼
    if (result.strike > 0) message += `${result.strike}스트라이크`; // 스트라이크

    if (message.length === 0) message = "낫싱";

    MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;
