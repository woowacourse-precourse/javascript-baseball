const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.userInputNumber;
  }

  play() {
    //MissionUtils.Console.print(this.computerNumber);
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (answer) => {
      this.userInputNumber = answer;
      
    });
    // MissionUtils.Console.close();
  }
}

module.exports = App;

const test = new App;
test.play();