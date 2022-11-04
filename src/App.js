const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerRandomNumber = [], userAnswer = null) {
    this.computerRandomNumber = computerRandomNumber;
    this.userAnswer = userAnswer;
  }

  play() {
    this.greeting();
    this.makeRandomNumberArray();
    this.inputUserAnswer();
  }

  greeting() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.parseUserAnswertoString(answer);
      this.printBallStrike(this.checkBallStrike(this.computerRandomNumber, this.userAnswer));
    });
  }

  makeRandomNumberArray() {
    this.computerRandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  parseUserAnswertoString(answer) {
    this.userAnswer = String(answer);
  }

  checkBallStrike(rn, input) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < input.length; i++) {
      if (rn.includes(parseInt(input[i])) && rn[i] == input[i]) {
        strike++;
      } else if (rn.includes(parseInt(input[i])) && rn[i] != input[i]) {
        ball++;
      }
    }

    return [ball, strike];
  }

  printBallStrike(ballStrike) {
    let ball = ballStrike[0];
    let strike = ballStrike[1];

    if (ball === 0 && strike !== 0) {
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
