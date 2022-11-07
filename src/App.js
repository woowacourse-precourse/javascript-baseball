const MissionUtils = require("@woowacourse/mission-utils");
const { isThreeDigitNumberWithoutZero, hasNoRedundancy, getInputFromConsole } = require("./utils.js");
const { updateStrikeOrBall } = require("./compare.js");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const ANSWER = this.generateRandomAnswer();

    this.proceedOneTurn(ANSWER);
  }

  /**
   * 정답이 될 무작위 난수를 배열로서 생성하는 함수
   * @returns 컴퓨터가 정한 정답을 자리수별로 담은 배열
   */
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

  /**
   * 사용자의 입력을 받으면서 게임 한 턴을 진행하는 함수
   * @param {*} answer 컴퓨터가 가지고 있는 정답
   */
  proceedOneTurn(answer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.isValidInput(input)) { // 올바르지 않은 입력 예외처리
        MissionUtils.Console.close();
        throw new Error("improper input!");
      }

      const COMPARE_RESULT = this.getResult(input, answer); // 비교 결과
      this.printCompareResult(COMPARE_RESULT);

      if (COMPARE_RESULT["strike"] === 3) {
        this.chooseProceedOrExit(); // 게임 재시작 혹은 프로그램 종료
      }
      else this.proceedOneTurn(answer);
    })
  }

  /**
   * 정답을 맞춘 후에 게임을 새로 시작할지 종료할지 정하고 진행하는 함수
   */
  chooseProceedOrExit() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

    MissionUtils.Console.readLine("", (input) => {
      if (input === "1") {
        const ANSWER = this.generateRandomAnswer();
        this.proceedOneTurn(ANSWER);
      }
      else if (input === "2") {
        MissionUtils.Console.close();
      }
      else {
        MissionUtils.Console.close();
        throw new Error("improper input!");
      }
    })
  }
}

const app = new App();
app.play();

module.exports = App;
