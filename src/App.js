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

  proceedGame(){
    MissionUtils.Console.readLine(MESSAGES.INPUT, (input) => {
      this.exceptionHandling(input);

      const inputArr = [...input];

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

}

const app = new App();
app.play();

module.exports = App;
