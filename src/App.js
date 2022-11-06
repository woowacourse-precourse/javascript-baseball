const MissionUtils = require("@woowacourse/mission-utils");

const MIN_RANGE = 1
const MAX_RANGE = 9
const HOW_MANY_PICK = 3

class App {
  constructor() {
    this.userNumbers = null;
    this.computerNumbers = null;
  }

  setNumbers() {
    this.computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(MIN_RANGE, MAX_RANGE, HOW_MANY_PICK);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumbers) => { 
      console.log(userNumbers);
     });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.setNumbers();
  }
}

//테스트를 위한 호출
const app = new App();
app.play();

module.exports = App;
