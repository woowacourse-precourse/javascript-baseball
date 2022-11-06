class App {
  play() {}
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
