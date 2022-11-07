const MissionUtils = require("@woowacourse/mission-utils");
const ExceptionCheck = require("./ExceptionCheck");

class App {
  constructor() {
    //게임 정보
    this.correctAnswer;
    this.userInput;
    this.ball = 0;
    this.strike = 0;
  }

  play() {
    this.gamaStartAlram();
    this.createRandomNum();
    this.getAnswer();
  }

  gamaStartAlram() {
    MissionUtils.Console.print("게임을 시작합니다");
  }

  createRandomNum() {
    let computerRandomNums = new Set();
    while (computerRandomNums.size < 3) {
      computerRandomNums.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return this.correctAnswer = [...computerRandomNums].join('');
  }

  getAnswer() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (input) => {
      const exceptionCheck = new ExceptionCheck();
      exceptionCheck.UserInputCheck(input);
      MissionUtils.Console.print(`입력한 숫자는 ${input} 입니다`);
      this.userInput = input;
      this.strikeCount();
      this.ballCount();
      this.strikeBallCountAlram();
      return this.userInput;
    });
  }

  strikeCount() {
    const correctAnswerArr = this.correctAnswer.split('');
    correctAnswerArr.map((number, index) => {
      if (number === this.userInput[index]) {
        this.strike += 1;
      }
    });
    return this.strike;
  }

  ballCount() {
    const correctAnswerArr = this.correctAnswer.split('');
    correctAnswerArr.map((number, index) => {
      if (number !== this.userInput[index] && this.userInput.includes(number)) {
        this.ball += 1;
      }
    });
    return this.ball;
  }

  nothing() {
    MissionUtils.Console.print('낫싱');
  }

  strikeBallCountAlram() {
    if (this.ball === 0 && this.strike === 0) {
      this.nothing();
    } else {
      MissionUtils.Console.print(`입력한 수: ${this.userInput}, ${this.ball}볼 ${this.strike}스트라이크`);
    }
    this.strikeBallChecking();
  }

  strikeBallChecking() {
    if (this.strike !== 3) {
      this.countReset();
      this.getAnswer();
    } else {
      this.win();
      this.restartOrEnd();
    }
  }

  countReset() {
    this.strike = 0;
    this.ball = 0;
  }

  win() {
    MissionUtils.Console.print(`3스트라이크! 정답은 : ${this.correctAnswer} 입니다`);
  }

  restartOrEnd() {
    MissionUtils.Console.readLine(`1 을 입력하면 종료, 2 를 입력하면 게임을 재시작 합니다`, (answer) => {
      if (answer == 2) {
        this.countReset();
        app.play();
      } else if (answer == 1) {
        MissionUtils.Console.print('게임을 종료합니다');
        MissionUtils.Console.close();
      } else {
        MissionUtils.Console.print('1 과 2 둘중 하나만 선택하세요');
        this.restartOrEnd();
      }
    });
  }

}
const app = new App();
app.play();
module.exports = App;
