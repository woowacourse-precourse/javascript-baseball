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
    //console.log(this.computerNumber);
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userInputNumber) => {
      this.userInputNumber = userInputNumber;
      this.isError();
      this.countMethod();
      this.printMessageMethod();
      if (this.countStrike < 3) {
        this.countStrike = 0;
        this.countBall = 0;
        this.play();
      }
      else if (this.countStrike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.gameRestart();
      }
    });
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

 gameRestart() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n', (userResponse)=>{
    if (userResponse === '1') {
      this.countStrike = 0;
      this.countBall = 0;
      this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
      this.play();
    }
    else if (userResponse === '2') {
      MissionUtils.Console.close();
    }
    else {
    throw '입력값의 양식이 올바르지 않습니다.';
    }
  });
 }

 isError() {
  const countUserInputNumber = new Set(this.userInputNumber.split(''));
  if (this.userInputNumber.length >= 4) {
    throw '입력값의 양식이 올바르지 않습니다.';
  }
  else if (countUserInputNumber.size < 3) {
    throw '입력값의 양식이 올바르지 않습니다.';
  }
  else if (countUserInputNumber.has('0')) {
    throw '입력값의 양식이 올바르지 않습니다.';
  }
  else if ((/\D/g).test(this.userInputNumber)) {
    throw '입력값의 양식이 올바르지 않습니다.';
  }
 }
}

module.exports = App;

const test = new App();
test.play();