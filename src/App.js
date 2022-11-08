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
    print([...computerRandomNums]);
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
    const ball = count.ball(this.#userInputNums, this.#computerNums);
    const strike = count.strike(this.#userInputNums, this.#computerNums);
    this.countPrinter(ball, strike);
    if (strike === COMPUTER_NUM_LENGTH) {
      this.win();
    }
    this.getAnswer();
  }

  countPrinter(ball, strike) {
    if (this.onlyStrike(ball, strike)) {
      return print(`${strike}${BASEBALL_MSG.STRIKE}`);
    }
    if (this.onlyBall(ball, strike)) {
      return print(`${ball}${BASEBALL_MSG.BALL}`);
    }
    if (this.onlyNothing(ball, strike)) {
      return print(BASEBALL_MSG.NOTHING);
    }
    return print(`${ball}${BASEBALL_MSG.BALL} ${strike}${BASEBALL_MSG.STRIKE}`);
  }

  onlyStrike(ball, strike) {
    return ball === 0 && strike !== 0;
  }

  onlyBall(ball, strike) {
    return ball !== 0 && strike === 0;
  }

  onlyNothing(ball, strike) {
    return ball === 0 && strike === 0;
  }

  ballAndStrike(ball, strike) {
    return ball !== 0 && strike !== 0;
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