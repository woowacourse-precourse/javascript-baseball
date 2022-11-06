const MissionUtils = require("@woowacourse/mission-utils");

const MIN_RANGE = 1
const MAX_RANGE = 9
const PICK_LENGTH = 3

class App {
  constructor() {
    this.computerNumbers = null;
  }

  checkStrike(userNumbers) {
    let strikeCount = 0;

    for (let i = 0; i < PICK_LENGTH; i++) 
      if (this.computerNumbers[i] == userNumbers[i]) strikeCount++;

    return strikeCount;
  }

  checkBall(userNumbers) {
    let ballCount = 0;

    for (let i = 0; i < PICK_LENGTH; i++) 
      if (this.computerNumbers.indexOf(parseInt(userNumbers[i])) != -1) 
        ballCount++;

    return ballCount;
  }

  setNumbers() {
    let strikeCount;
    let ballCount;
    this.computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(MIN_RANGE, MAX_RANGE, PICK_LENGTH);

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumbers) => { 
      strikeCount = this.checkStrike(userNumbers);
      ballCount = this.checkBall(userNumbers);
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
