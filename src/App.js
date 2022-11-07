const { print, close, readLine, pickNumberInRange } = require("./Utils");
const ExceptionCheck = require("./ExceptionCheck");
const { GAME_MSG, BASEBALL_MSG } = require("./Message");
const Counter = require("./Counter");

class App {

  #computerNums;
  #userInputNums;

  gamaStartAlram() {
    print(GAME_MSG.START);
  }

  play() {
    this.gamaStartAlram();
    this.createRandomNum();
    this.setComputerNums();
    this.getAnswer();
  }

  createRandomNum() {
    let computerRandomNums = new Set();
    while (computerRandomNums.size < 3) {
      computerRandomNums.add(pickNumberInRange(1, 9));
    }
    return this.#computerNums = [...computerRandomNums].join('');
  }

  setComputerNums() {
    this.#computerNums = this.createRandomNum();
  }

  getAnswer() {
    readLine(GAME_MSG.NUM_REQUEST, (userInput) => {
      this.userInputAnalysis(userInput);
    });
  }

  userInputAnalysis(userInput) {
    const exceptionCheck = new ExceptionCheck();
    if (exceptionCheck.userInputCheck(userInput)) {
      this.#userInputNums = userInput;
      this.baseBall();
    }
  }

  baseBall() {
    const count = new Counter();
    const ball = count.ball(this.#userInputNums, this.#computerNums);
    const strike = count.strike(this.#userInputNums, this.#computerNums);
    this.countPrinter(ball, strike);
    if (strike === 3) {
      this.win();
    }
    this.getAnswer();
  }

  countPrinter(ball, strike) {
    if (ball === 0 && strike !== 0) {
      print(`${strike}스트라이크`);
    } else if (ball !== 0 && strike === 0) {
      print(`${ball}볼`);
    } else if (ball === 0 && ball === 0) {
      print('낫싱');
    } else {
      print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  win() {
    print(`3스트라이크! 정답은 : ${this.#computerNums} 입니다`);
    this.restartOrEnd();
  }

  restartOrEnd() {
    readLine(GAME_MSG.RESTART_ASK, (answer) => {
      if (answer == 1) {
        app.play();
      } else if (answer == 2) {
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