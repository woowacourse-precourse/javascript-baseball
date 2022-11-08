const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.baseBallGame();
    MissionUtils.Console.close();
  }

  baseBallGame() {
    let playGame = "1";

    while (playGame === "1") {
      let computer = this.getRandomNumber();

      this.guessNumber(computer);
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.print(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      MissionUtils.Console.readLine("", (answer) => {
        playGame = answer;
      });
    }
  }

  guessNumber(computer) {
    let number;
    do {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        number = answer;
      });
      this.checkException(number);
    } while (!this.checkResult(computer, number));
  }

  checkResult(computer, number) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      let index = computer.indexOf(number.charAt(i));
      if (index === -1) {
        continue;
      } else if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }

    this.printMessage(strike, ball);

    if (strike === 3) {
      return true;
    }
    return false;
  }

  printMessage(strike, ball) {
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  checkException(number) {
    if (number === undefined) {
      throw new Error("undefined");
    } else if (number === "") {
      throw new Error("입력해야 합니다.");
    } else if (isNaN(number)) {
      throw new Error("숫자를 입력해야 합니다.");
    } else if (number.length !== 3) {
      throw new Error("세자리 숫자를 입력해야 합니다.");
    } else if (number.includes("0")) {
      throw new Error("1 부터 9까지 숫자여야 합니다.");
    } else if (this.checkSameNumber(number)) {
      throw new Error("서로 다른 숫자를 입력해야 합니다.");
    }
  }

  checkSameNumber(number) {
    for (let i = 0; i < number.length; i++) {
      if (
        number.indexOf(number.charAt(i)) !==
        number.lastIndexOf(number.charAt(i))
      ) {
        return true;
      }
    }
    return false;
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }
}

module.exports = App;
