const MissionUtils = require("@woowacourse/mission-utils");

class App {
  createComputerNumber() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let computerNumber = new Set();

    while (computerNumber.size !== 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (number !== 0) {
        computerNumber.add(number);
      }
    }

    return [...computerNumber];
  }

  checkBallStrike(computerNumber, userInput) {
    let ballStrikeCount = [0, 0];

    if (!(userInput.length === 3 && userInput.length === new Set(userInput).size))
      throw new Error("잘못된 입력입니다.");

    for (let i = 0; i < 3; i++) {
      let checkComputerNumber = Number(computerNumber[i]);

      if (!(1 <= checkComputerNumber && checkComputerNumber <= 9)) {
        throw new Error("잘못된 입력입니다.");
      } else if (computerNumber[i] === checkComputerNumber) {
        ballStrikeCount[1]++;
      } else if (computerNumber.indexOf(checkComputerNumber) !== -1) {
        ballStrikeCount[0]++;
      }
    }

    return ballStrikeCount;
  }

  printBallStrike(ballStrikeCount) {
    if ((ballStrikeCount[0] === 0) & (ballStrikeCount[1] === 0)) {
      return "낫싱";
    } else if (ballStrikeCount[0] === 0) {
      return `${ballStrikeCount[1]}스트라이크`;
    } else if (ballStrikeCount[1] === 0) {
      return `${ballStrikeCount[0]}볼`;
    } else {
      return `${ballStrikeCount[0]}볼 ${ballStrikeCount[1]}스트라이크`;
    }
  }

  inputUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      let result = this.printBallStrike(this.checkBallStrike(this.computerNumber, input));

      MissionUtils.Console.print(result);

      if (result !== "3스트라이크") {
        this.inputUserNumber();
      } else {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        return this.retryOrEnd();
      }
    })
  }

  retryOrEnd() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (input === "1") {
          this.play();
        } else if (!(input === "2")) {
          throw new Error("잘못된 입력입니다.");
        } else {
          MissionUtils.Console.close();
        }
      }
    );
  }

  play() {
    this.computerNumber = this.createComputerNumber();
    
    return this.inputUserNumber();
  }
}

module.exports = App;
