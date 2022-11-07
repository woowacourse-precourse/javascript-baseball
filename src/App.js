const { print, close, readLine, pickNumberInRange } = require("./Utils");
const ExceptionCheck = require("./ExceptionCheck");
const { GAME_MSG, BASEBALL_MSG } = require("./Message");
const Counter = require("./Counter");

class App {
  constructor() {
    this.gamaStartAlram();
  }

  #computerNums;
  #userInputNums;

  gamaStartAlram() {
    print(GAME_MSG.START);
  }

  play() {
    this.createRandomNum();
    this.setComputerNums();
    this.getAnswer();
  }

  createRandomNum() {
    let computerRandomNums = new Set();
    while (computerRandomNums.size < 3) {
      computerRandomNums.add(pickNumberInRange(1, 9));
    }
    return [...computerRandomNums].join('');
  }

  setComputerNums() {
    this.#computerNums = this.createRandomNum();
    print(this.#computerNums);
  }

  getAnswer() {
    readLine(GAME_MSG.NUM_REQUEST, (userInput) => {
      this.userInputAnalysis(userInput);
    });
  }

  userInputAnalysis(userInput) {
    const exceptionCheck = new ExceptionCheck();
    if (exceptionCheck.UserInputCheck(userInput)) {
      this.#userInputNums = userInput;
      this.baseBall();
    }
  }

  baseBall() {
    const count = new Counter();
    const ball = count.ball(this.#userInputNums, this.#computerNums);
    const strike = count.strike(this.#userInputNums, this.#computerNums);
    if (strike === 3) {
      this.win();
    }
    this.strikeBallCountAlram();
    this.getAnswer();
  }

  nothing() {
    print('낫싱');
  }

  strikeBallCountAlram() {
    if (this.ball === 0 && this.strike === 0) {
      this.nothing();
    } else {
      print(`입력한 수: ${this.userInput}, ${this.ball}볼 ${this.strike}스트라이크`);
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
    print(`3스트라이크! 정답은 : ${this.#computerNums} 입니다`);
  }

  restartOrEnd() {
    readLine(GAME_MSG.RESTART_ASK, (answer) => {
      if (answer == 2) {
        this.countReset();
        app.play();
      } else if (answer == 1) {
        print(GAME_MSG.END);
        close();
      } else {
        print('1 과 2 둘중 하나만 선택하세요');
        this.restartOrEnd();
      }
    });
  }

}
const app = new App();
app.play();
module.exports = App;
