const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, REQUIREMENT, ERROR, HINT } = require('./constant/Constant');

class App {
  constructor() {
    this.computer = 1;
  }
  play() {
    this.computer = this.makeRandom();
    MissionUtils.Console.print(MESSAGES.INIT);
    this.proceedGame();
  }

  makeRandom() {
    const computer = [];
    while (computer.length < REQUIREMENT.LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(REQUIREMENT.MIN, REQUIREMENT.MAX);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    
    return computer.join('');
  }

  proceedGame() {
    MissionUtils.Console.readLine(MESSAGES.INPUT, (input) => {
      this.exceptionHandling(input);

      const inputArr = [...input];
      const { ball, strike } = this.countBS(inputArr);
      
      this.printResult(ball, strike);
      if (strike !== REQUIREMENT.LENGTH) return this.proceedGame(); 

      MissionUtils.Console.print(MESSAGES.SUCCESS);
      this.playNewGame();
    });
  }

  exceptionHandling(input) {
    if (input.length !== REQUIREMENT.LENGTH) {
      throw(ERROR.LENGTH);
    }
    if (Number.isNaN(Number(input))) {
      throw(ERROR.NaN);
    }
    if (input.includes('0')) {
      throw(ERROR.ZERO);
    }
    if (new Set(input).size !== REQUIREMENT.LENGTH) {
      throw(ERROR.DUPLICATE);
    }  
  }

  countBS(inputArr) {
    let strike = 0;
    let ball = 0;

    inputArr.forEach((cur, idx) => {
      if (idx === this.computer.indexOf(cur)) {
        strike += 1;
      } else if (this.computer.includes(cur)) {
        ball += 1;
      }
    });

    return { ball, strike };
  }

  printResult(ball, strike){
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print(HINT.NOTHING); 
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}${HINT.STRIKE}`);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}${HINT.BALL}`);
    } else {
      MissionUtils.Console.print(`${ball}${HINT.BALL} ${strike}${HINT.STRIKE}`);
    }
  }

  playNewGame() {
    MissionUtils.Console.readLine(MESSAGES.RESTART, (input) => {
      if (input === REQUIREMENT.RESTART) {
        this.play();
      } else if (input === REQUIREMENT.TERMINATE) {
        MissionUtils.Console.close();
      } else {
        throw(ERROR.NUMBER);
      }
    });
  }

}

const app = new App();
app.play();

module.exports = App;
