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

  checkUserNumbers(userNumber) {
    if (userNumber.length !== 3) {
      throw new Error("세글자가 아닙니다");
    }
    for (let i = 0; i < userNumber.length; i++) {
      if (isNaN(userNumber[i])) {
        throw new Error("숫자가 아닙니다");
      }
      for (let j = 0; j < userNumber.length; j++) {
        if (i == j) {
          continue;
        }
        if (userNumber[i] == userNumber[j]) {
          throw new Error("숫자가 중복됩니다");
        }
      }
    }
  }
}

module.exports = App;
