const MissionUtils = require("@woowacourse/mission-utils");
const STD = MissionUtils.Console; 
const RANDOM = MissionUtils.Random;

class App {
  constructor(){
  }

   checkThreeLength(number) {
    const numberLength = String(number).length;

    if (numberLength !== 3) {
      return false;
    }

    return true;
  }

  checkComposeOneToNine(number) {
    const regexedNumber = String(number).match(/[1-9]/g);

    if (regexedNumber == null || regexedNumber.length !== 3) {
      return false;
    }

    return true;
  }
  
  checkUniqueNumber(number) {
    const splitNumber = number.split("");
    const uniqueNumber = [...new Set(splitNumber)];

    if (uniqueNumber.length !== 3) {
      return false;
    }

    return true;
  }

  checkCorrectNumber(number) {

    if (!this.checkThreeLength(number)) {
      throw "세글자가 아닙니다";
    }

    if (!this.checkComposeOneToNine(number)) {
      throw "1~9가 아닌 다른걸로 이루어져있습니다";
    }

    if (!this.checkUniqueNumber(number)) {
      throw "중복되는 숫자가 있습니다";
    }

  }

  recieveComputer() {
    let computerNumber = [];

    while (computerNumber.length < 3) {
      const number = RANDOM.pickNumberInRange(1, 9);

      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }

    } 

    return computerNumber.join("");
  }

  newGame(input) {

    if (input == 1) {
      this.getComputerAndUser();
    }

    if (input == 2) {
      STD.close();
    }

  }

  whenThreeStrike() {
    STD.print(`3개의 스트라이크를 모두 맞히셨습니다! 게임 종료`);
    STD.readLine(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : `, input => 
      this.newGame(input) 
    );
  }

  printAndDecide(computerNumber, strike, ball) {

    if (strike && ball) {
      STD.print(`${ball}볼 ${strike}스트라이크`);
      this.userInput(computerNumber);
    }

    if (strike && strike !==3 && !ball) {
      STD.print(`${strike}스트라이크`);
      this.userInput(computerNumber);
    }

    if (!strike && ball) {
      STD.print(`${ball}볼`);
      this.userInput(computerNumber);
    }

    if (!strike && !ball) {
      STD.print(`낫싱`);
      this.userInput(computerNumber);
    }

    if (strike === 3 ) {
      STD.print(`3스트라이크`);
     this.whenThreeStrike();
    }

  }

  compareUserAndComputer(userNumber, computerNumber) {
    const splitUserNumber = userNumber.split("");
    const splitComputerNumber = computerNumber.split("");
    
    let strike = 0;
    let ball = 0;

    for( let i = 0; i < splitUserNumber.length; i++ ) {
      const userNumberIndexOfComputerNumber = splitComputerNumber.indexOf(splitUserNumber[i]);

      if (userNumberIndexOfComputerNumber == i) {
        strike++;
        continue;
      }

      if (userNumberIndexOfComputerNumber >= 0) {
        ball++;
        continue;
      }

    }
    
    this.printAndDecide(computerNumber, strike, ball);
  }

  checkUserNumberAndCompare(userNumber, computerNumber) {
    this.checkCorrectNumber(userNumber);
    this.compareUserAndComputer (userNumber, computerNumber);
  }
  
  userInput(computerNumber) {
    STD.readLine('숫자를 입력해주세요 : ', userNumber => {
      this.checkUserNumberAndCompare(userNumber, computerNumber);
    })
  }

  getComputerAndUser() {
    const computerNumber = this.recieveComputer();
    this.checkCorrectNumber(computerNumber);
    this.userInput(computerNumber)
  }

  play() {
    STD.print(`숫자 야구 게임을 시작합니다.`);
    this.getComputerAndUser();
   }
 
}

const app = new App();

module.exports = App;
