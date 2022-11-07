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
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

module.exports = App;
