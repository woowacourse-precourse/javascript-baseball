class App {
  play() {}
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
