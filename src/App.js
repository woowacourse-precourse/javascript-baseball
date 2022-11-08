const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumberArray = this.getComputerRandomNumber();
    this.userInputNumber;
    this.countStrike = 0;
    this.countBall = 0;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getComputerRandomNumber() {
    const computerNumberSet = new Set();
    while (computerNumberSet.size < 3) {
      computerNumberSet.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    const computerNumberArray = [...computerNumberSet];
    return computerNumberArray;
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userInputNumber) => {
      this.userInputNumber = userInputNumber;
      this.isError();
      this.count();
      this.printMessage();
      if (this.countStrike < 3) {
        this.countStrike = 0;
        this.countBall = 0;
        this.play(); 
      }
      else if (this.countStrike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.isGameRestart();
      }
    });
  }

  count() {
    const userNumberArray = this.userInputNumber.split('');  
    const computerStringArray = this.computerNumberArray.map(num=>num.toString());
    
    for ( let i=0; i<3; i++ ) {
      if ( userNumberArray[i] === computerStringArray[i] ) {
        this.countStrike += 1;
      }
      else if (userNumberArray.includes(computerStringArray[i])) {
        this.countBall += 1;
      }
    }
  }

  printMessage() {
    const strikeNumber = this.countStrike;
    const ballNumber = this.countBall;

    if ( strikeNumber > 0 && ballNumber === 0 ) {
      MissionUtils.Console.print(`${strikeNumber}스트라이크`);
    }
    else if ( strikeNumber === 0 && ballNumber > 0 ) {
      MissionUtils.Console.print(`${ballNumber}볼`);
    }
    else if (strikeNumber > 0 && ballNumber > 0) {
      MissionUtils.Console.print(`${ballNumber}볼 ${strikeNumber}스트라이크`);
    }
    else if ( strikeNumber + ballNumber === 0) {
      MissionUtils.Console.print('낫싱');
    }
 }

 isGameRestart() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n', (userResponse)=>{
    if (userResponse === '1') {
      this.countStrike = 0;
      this.countBall = 0;
      this.computerNumberArray = this.getComputerRandomNumber();
      this.play();
    }
    else if (userResponse === '2') {
      MissionUtils.Console.close();
    }
    else {
    throw '1 혹은 2를 입력해주세요.';
    }
  });
 }

 isError() {
  const countUserInputNumber = new Set(this.userInputNumber.split(''));
  if (this.userInputNumber.length >= 4) {
    throw '서로 다른 3개의 숫자를 입력해주세요';
  }
  else if (countUserInputNumber.size < 3) {
    throw '서로 다른 3개의 숫자를 입력해주세요.';
  }
  else if (countUserInputNumber.has('0')) {
    throw '1에서 9사이의 숫자만 입력가능합니다.';
  }
  else if ((/\D/g).test(this.userInputNumber)) {
    throw '1에서 9사이의 숫자만 입력가능합니다.';
  }
 }
}

module.exports = App;

const game = new App();
game.play();