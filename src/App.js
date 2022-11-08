const MissionUtils = require("@woowacourse/mission-utils");

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

  printStrikeAndBall(computerNumbers, userNumber) {
    let userNumbers = userNumber.split("").map(Number);
    const { strike, ball } = this.countStrikeAndBall(
      computerNumbers,
      userNumbers
    );

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }

    this.checkAnswer(strike, computerNumbers);
  }

  countStrikeAndBall(computerNumbers, userNumbers) {
    let strike = 0;
    let ball = 0;
    userNumbers.forEach((item, index) => {
      if (item === computerNumbers[index]) {
        strike++;
      } else if (computerNumbers.includes(item)) {
        ball++;
      }
    });
    return { strike, ball };
  }

  checkAnswer(strike, computerNumbers) {
    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.chooseRestartGame();
    } else {
      this.makeUserNumbers(computerNumbers);
    }
  }

  chooseRestartGame() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    MissionUtils.Console.readLine("", (input) => {
      console.log(input);
      if (input == 1) {
        this.startGame();
      } else if (input == 2) {
        MissionUtils.Console.print("게임종료");
        MissionUtils.Console.close();
      } else {
        throw new Error("1 또는 2가 입력되지 않았습니다.");
      }
    });
  }
}

module.exports = App;
