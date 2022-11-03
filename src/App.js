const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerRandomNumber = null, userAnswer = null) {
    this.computerRandomNumber = computerRandomNumber;
    this.userAnswer = userAnswer;
  }
  play() {
    this.greeting();
    this.computerRandomNumber = this.makeRandomNumberArray();
    this.userAnswer = this.inputUserAnswer();
    this.parseUserAnswertoString();
    this.printBallStrike(this.checkBallStrike(this.userAnswer));
  }

  greeting() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userAnswer = answer;
    });
  }

  makeRandomNumberArray() {
    this.computerRandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3
    );
  }

  parseUserAnswertoString() {
    this.userAnswer = String(this.userAnswer);
  }

  checkBallStrike(computerRandomNumber, userAnswer) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < input.length; i++) {
      if (
        computerRandomNumber.includes(parseInt(userAnswer[i])) &&
        computerRandomNumber[i] == userAnswer[i]
      ) {
        strike++;
      } else if (
        computerRandomNumber.includes(parseInt(userAnswer[i])) &&
        computerRandomNumber[i] != userAnswer[i]
      ) {
        ball++;
      }
    }
    return [ball, strike];
  }

  printBallStrike(ballStrike) {
    let ball = ballStrike[0];
    let strike = ballStrike[1];

    if (ball === 0 && strike !== 0) {
      MissionUtils;
      console.log(`${strike}스트라이크`);
    } else if (strike === 0 && ball !== 0) {
      console.log(`${ball}볼`);
    } else if (strike !== 0 && ball !== 0) {
      console.log(`${ball}볼 ${strike}스트라이크`);
    } else {
      console.log("낫싱");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
