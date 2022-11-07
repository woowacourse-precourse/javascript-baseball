const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computeNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3,
    );
  }

  play() {
    MissionUtils.Console.print(this.computeNumberArray);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      MissionUtils.Console.print(`입력받은 숫자 : ${answer}`);
    });
  }
}

const t = new App();
t.play();

module.exports = App;
