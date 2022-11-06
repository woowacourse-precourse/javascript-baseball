const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.userInputNumber;
    this.countStrike = 0;
    this.countBall = 0;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
   // MissionUtils.Console.print(this.computerNumber);
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userInputNumber) => {
      this.userInputNumber = userInputNumber;
      this.countMethod();
      this.printMessageMethod();
        });
    // MissionUtils.Console.close();
  }

  countMethod() {
    const userNumberArray = this.userInputNumber.split('');  
    const computerNumberArray = this.computerNumber.map(num=>num.toString());
    
    for ( let i=0; i<3; i++ ) {
      if ( userNumberArray[i] === computerNumberArray[i] ) {
        this.countStrike += 1;
      }
      else if (userNumberArray.includes(computerNumberArray[i])) {
        this.countBall += 1;
      }
    }
  }

  printMessageMethod() {
    if ( this.countStrike > 0 && this.countBall === 0 ) {
      MissionUtils.Console.print(`${this.countStrike}스트라이크`)
    }
    else if ( this.countStrike === 0 && this.countBall > 0 ) {
      MissionUtils.Console.print(`${this.countBall}볼`)
    }
    else if (this.countStrike > 0 && this.countBall > 0) {
      MissionUtils.Console.print(`${this.countBall}볼 ${this.countStrike}스트라이크`)
    }
    else if ( this.countStrike + this.countBall === 0) {
      MissionUtils.Console.print('낫싱');
    }
 }   

}

module.exports = App;

const test = new App;
test.play();