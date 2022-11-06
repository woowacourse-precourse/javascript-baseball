class App {
  play() {}
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

module.exports = App;
