const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = [];
    let strikeCount;
    let ballCount;
    let nothing;

    // 컴퓨터의 랜덤한 숫자 3개
    function computerNumbers() {
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
    }

    computerNumbers();
  }
}

module.exports = App;
