const MissionUtils = require("@woowacourse/mission-utils");

class App {
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
