const MissionUtils = require("@woowacourse/mission-utils");

const startMessage = function printGameStartMessage() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const generateAnswer = function generateRandomThreeNumbers() {
  const answer = [];
  while (answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
};

class App {
  play() {}
}

module.exports = App;
