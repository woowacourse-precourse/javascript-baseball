const MissionUtils = require("@woowacourse/mission-utils");
const NUMBER_LENGTH = 3;
const RESTART_CODE = "1";
const EXIT_CODE = "2";
const START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const BALL_STRING = "볼";
const STRIKE_STRING = "스트라이크";
const NOTHING_STRING = "낫싱";
const CORRECT_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_MESSAGE = `게임을 새로 시작하려면 ${RESTART_CODE}, 종료하려면 ${EXIT_CODE}를 입력하세요.`;

class App {
  play() {
    let answer = this.getRandomNumber();
    this.printMessage(START_MESSAGE);
    this.playerInput();
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  getRandomNumber() {
    const computer = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      NUMBER_LENGTH
    );
    return computer;
  }

  playerInput() {
    MissionUtils.Console.readLine(INPUT_MESSAGE, (input) => {
      this.checkInput(input);
    });
  }

  checkOverlap(input, checkIndex) {
    for (let index = 0; index < NUMBER_LENGTH; index++) {
      if (index === checkIndex) {
        continue;
      }
      if (input[index] === input[checkIndex]) {
        throw new Error("각 숫자는 중복되지 않아야합니다");
      }
    }
  }

  checkInput(input) {
    if (input.length !== NUMBER_LENGTH) {
      throw new Error(`${NUMBER_LENGTH}자리 숫자를 입력해 주세요`);
    }
    for (let index = 0; index < NUMBER_LENGTH; index++) {
      if (isNaN(input[index])) {
        throw new Error("숫자만 입력해 주세요");
      }
      this.checkOverlap(input, index);
    }
  }
}

module.exports = App;
