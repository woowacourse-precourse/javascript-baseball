const MissionUtils = require("@woowacourse/mission-utils");

class App {
  showCommand() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        this.isRestart(input);
      }
    );
  }

  printResult(strike, ball, randomNumber) {
    if (strike === 0 && ball === 0) {
      console.log("낫싱");
    } else if (strike > 0 && ball > 0) {
      console.log(`${strike}스트라이크 ${ball}볼`);
    } else if (strike > 0) {
      console.log(`${strike}스트라이크`);
    } else if (ball > 0) {
      console.log(`${ball}볼`);
    }

    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.showCommand();
    } else {
      this.makeUserNumbers(randomNumber);
    }
  }

  countStrikeAndBall(userNumber, randomNumber) {
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

      this.printResult(strike, ball, randomNumber);
    }
  }


  validateUserNumbers(inputNumber) {
    if (inputNumber.length < 3 || inputNumber.includes("0")) {
      // throw 오류
      throw new Error("잘못입력.");
    }
  }


  makeUserNumbers(randomNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.validateUserNumbers(inputNumber);
      let userNumber = inputNumber.split("")
      this.countStrikeAndBall(userNumber, randomNumber);
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

  play() {}
}

const app = new App();
app.play();
// module.exports = App;
