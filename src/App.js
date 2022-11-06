const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.userInputNumber;
    this.countStrike = 0;
    this.countBall = 0;
  }

  play() {
    //MissionUtils.Console.print(this.computerNumber);
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userInputNumber) => {
      this.userInputNumber = userInputNumber;
      //this.countMethod(this.userInputNumber, this.computerNumber)
    });
    // MissionUtils.Console.close();
  }

  splitMethod(input) {
    return input.toString().split('');
  }

  countMethod(userNumber, computerNumber) {
    const userString = this.splitMethod(userNumber);
    const computerString = this.splitMethod(computerNumber);
    
    for ( let i=0; i<3; i++ ) {
      if ( userString[i] === computerString[i] ) {
        this.countStrike += 1;
      }
      else if (userString.includes(computerString[i])) {
        this.countBall += 1;
      }
    }
  }
}

module.exports = App;

const test = new App;
test.play();