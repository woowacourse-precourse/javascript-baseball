const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 컴퓨터 랜덤으로 서로 다른 세 숫자 받기
  computerSet() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
        this.computer = computer;
      }
    }
  }

  // 게임 시작
  play() {
    this.computer = [];
    this.user = [];

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerSet();
    this.userPlay();
  }
}

const app = new App();
app.play();

module.exports = App;
