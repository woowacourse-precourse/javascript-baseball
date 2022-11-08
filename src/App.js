const { print, close, readLine, pickNumberInRange } = require("./Utils");
const CountPrinter = require("./CountPrinter");
const ExceptionCheck = require("./ExceptionCheck");
const { GAME_MSG, BASEBALL_MSG } = require("./Message");
const Counter = require("./Counter");
const { MAX_NUM_RANGE, MIN_UUM_RANGE, COMPUTER_NUM_LENGTH, RESTART_INPUT_NUM, END_INPUT_NUM } = require("./Condition");

class App {
  constructor() {
    print(GAME_MSG.START);
  }

  #computerNums;
  #userInputNums;

  play() {
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

  // arrToString(arr) {
  //   return arr.join('')
  // }

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
    const countPrint = new CountPrinter();
    const ball = count.ball(this.#userInputNums, this.#computerNums);
    const strike = count.strike(this.#userInputNums, this.#computerNums);
    countPrint.ofBaseball(ball, strike);
    if (strike === COMPUTER_NUM_LENGTH) {
      this.win();
    }
    this.getAnswer();
  }

  win() {
    print(GAME_MSG.WIN);
    this.restartOrEnd();
  }

  restartOrEnd() {
    readLine(GAME_MSG.RESTART_ASK, (userInput) => {
      const exceptionCheck = new ExceptionCheck();
      exceptionCheck.restartInputCheck(userInput);
      if (this.inputIsNumOne(userInput)) {
        app.play();
      }
      if (this.inputIsNumTwo(userInput)) {
        print(GAME_MSG.END);
        close();
      }
    });
  }

  inputIsNumOne(userInput) {
    return Number(userInput) === RESTART_INPUT_NUM;
  }

  inputIsNumTwo(userInput) {
    return Number(userInput) === END_INPUT_NUM;
  }
}
const app = new App();
app.play();
module.exports = App;