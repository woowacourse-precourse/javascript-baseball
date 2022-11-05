const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerRandomNumber = [], userAnswer = null) {
    this.computerRandomNumber = computerRandomNumber;
    this.userAnswer = userAnswer;
  }

  play() {
    this.greeting();
    this.makeRandomNumberArray();
    console.log(this.computerRandomNumber);
    this.inputUserAnswer();
  }

  replay() {
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
    if (this.userAnswer.length !== 3) throw new Error();
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

    if (strike === 3) {
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.askReplayorClose();
    } else {
      this.inputUserAnswer();
    }
  }
  askReplayorClose() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
      if (answer == 2) {
        MissionUtils.Console.close();
      } else if (answer == 1) {
        this.replay();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
