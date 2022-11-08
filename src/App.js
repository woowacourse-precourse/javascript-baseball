class App {
  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumbers = this.makeComputerNumbers();
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
}

module.exports = App;
