const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다");
    this.input();
  }

  getRandomNumber() {
    MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  input() {
    Console.readLine("숫자를 입력해주세요: ", (inputNum) => {
      console.log(`입력 받은 숫자 : ${inputNum}`);
    });
  }
}

const numberBaseball = new App();

numberBaseball.play();

module.exports = App;
