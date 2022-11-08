class App {
  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumbers = this.makeComputerNumbers();
    this.makeUserNumbers(computerNumbers);
  }

  makeComputerNumbers() {
    let computerNumbers = new Array();
    while (computerNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers;
  }

  makeUserNumbers(computerNumbers) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      console.log(`숫자를 입력해주세요 : ${userNumber}`);
      this.checkUserNumbers(userNumber);
      this.printStrikeAndBall(computerNumbers, userNumber);
    });
  }
}

module.exports = App;
