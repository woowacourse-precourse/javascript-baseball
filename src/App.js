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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userAnswer = answer;
      if (answer.length > 3) {
        throw new Error();
      } else {
        this.printBallStrike(this.checkBallStrike(this.computerRandomNumber, this.userAnswer));
      }
    });
  }

  makeRandomNumberArray() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computerRandomNumber = computer;
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
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike === 0 && ball !== 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (strike !== 0 && ball !== 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else {
      MissionUtils.Console.print("낫싱");
    }

    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
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
      } else throw new Error();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
