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
      console.log(input);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
