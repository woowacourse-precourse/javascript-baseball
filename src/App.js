const { print, close, readLine, pickNumberInRange } = require("./Utils");
const ExceptionCheck = require("./ExceptionCheck");
const { GAME_MSG, BASEBALL_MSG } = require("./Message");
const Counter = require("./Counter");
const { MAX_NUM_RANGE, MIN_UUM_RANGE, COMPUTER_NUM_LENGTH, RESTART_INPUT_NUM, END_INPUT_NUM } = require("./Condition");

class App {

  #computerNums;
  #userInputNums;

  gamaStartAlram() {
    print(GAME_MSG.START);
  }

  play() {
    this.gamaStartAlram();
    this.createRandomNum();
    this.getAnswer();
  }

  createRandomNum() {
    let computerRandomNums = new Set();
    while (computerRandomNums.size < COMPUTER_NUM_LENGTH) {
      computerRandomNums.add(pickNumberInRange(MIN_UUM_RANGE, MAX_NUM_RANGE));
    }
    return this.#computerNums = [...computerRandomNums].join('');
  }

  getAnswer() {
    readLine(GAME_MSG.NUM_REQUEST, (userInput) => {
      this.userInputAnalysis(userInput);
    });
  }

  userInputAnalysis(userInput) {
    const exceptionCheck = new ExceptionCheck();
    exceptionCheck.userInputCheck(userInput);
    this.setUserInput(userInput);
  }

  setUserInput(userInput) {
    this.#userInputNums = userInput;
    this.baseBall();
  }

  baseBall() {
    const count = new Counter();
    const ball = count.ball(this.#userInputNums, this.#computerNums);
    const strike = count.strike(this.#userInputNums, this.#computerNums);
    this.countPrinter(ball, strike);
    if (strike === COMPUTER_NUM_LENGTH) {
      this.win();
    }
    this.getAnswer();
  }


  countPrinter(ball, strike) {
    if (ball === 0 && strike !== 0) {
      print(`${strike}${BASEBALL_MSG.STRIKE}`);
    } else if (ball !== 0 && strike === 0) {
      print(`${ball}${BASEBALL_MSG.BALL}`);
    } else if (ball === 0 && strike === 0) {
      print(BASEBALL_MSG.NOTHING);
    } else {
      print(`${ball}${BASEBALL_MSG.BALL} ${strike}${BASEBALL_MSG.STRIKE}`);
    }
  }

  win() {
    print(GAME_MSG.WIN);
    this.restartOrEnd();
  }

  restartOrEnd() {
    readLine(GAME_MSG.RESTART_ASK, (answer) => {
      const exceptionCheck = new ExceptionCheck();
      // exceptionCheck.restartInputCheck(answer);
      if (answer == RESTART_INPUT_NUM) {
        app.play();
      }
      if (answer == END_INPUT_NUM) {
        print(GAME_MSG.END);
        close();
      } else {
        this.restartOrEnd();
      }
    });
  }
}
const app = new App();
app.play();
module.exports = App;