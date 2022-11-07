const MissionUtils = require("@woowacourse/mission-utils");

class App {
  isRestart(input) {
    if (input == 1) {
      this.startGame();
    }
  }

  showCommand() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    MissionUtils.Console.readLine("", (input) => {
      this.isRestart(input);
    });
  }

  correctAnswer(strike, randomNumber) {
    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.showCommand();
    } else {
      this.makeUserNumbers(randomNumber);
    }
  }

  printStrikeAndBall(strike, ball) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }
  }

  countStrikeAndBall(inputNumber, randomNumber) {
    let userNumber = inputNumber.split("");
    let strike = 0;
    let ball = 0;

    if (userNumber !== randomNumber) {
      userNumber.forEach((item, index) => {
        if (item === randomNumber[index]) {
          strike++;
        } else if (randomNumber.includes(item)) {
          ball++;
        }
      });

      this.printStrikeAndBall(strike, ball);
      this.correctAnswer(strike, randomNumber);
    }
  }

  validateUserNumbers(inputNumber) {
    if (inputNumber.length !== 3 || inputNumber.includes("0")) {
      // throw 오류
      throw new Error("수를 잘못 입력하였습니다.");
    }
  }

  makeUserNumbers(randomNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.validateUserNumbers(inputNumber);
      this.countStrikeAndBall(inputNumber, randomNumber);
    });
  }

  makeRandom() {
    let randomArray = new Array();

    while (randomArray.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!randomArray.includes(number)) {
        randomArray.push(number);
      }
    }

    const toStringRandomArray = randomArray.map((value) => String(value));
    return toStringRandomArray;
  }

  startGame() {
    const randomNumber = this.makeRandom();
    this.makeUserNumbers(randomNumber);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }
}

module.exports = App;

// const app = new App();
// app.play();
