const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startGame();
    this.selectComputer();
  }

  startGame() {
    const START = "숫자 야구 게임을 시작합니다.";
    console.log(START);
  }

  selectComputer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    
    return computer.join('');
  }
}

module.exports = App;
