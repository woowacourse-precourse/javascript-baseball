const MissionUtils = require("@woowacourse/mission-utils");

class App {
  START_NUM = 1;
  END_NUM = 9;
  
  play() {
    let randomNums = [1,2,3];

    while (randomNums.length !== 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(this.START_NUM,this.END_NUM);

      if (!randomNums.includes(randomNum)) {
        randomNums = [...randomNums, randomNum];
      }
    }
    
    let userInput = 123 + '';
    let result = {};

    while (result.strike !== 3) {
      randomNums.forEach((randomNum,i) => {
        if (randomNum === +userInput[i]) {
          result.strike = (result.strike ?? 0) + 1;
        } else if (randomNums.includes(+userInput[i])) {
          result.ball = result.ball ?? 0 + 1;
        }
      })
      
      MissionUtils.Console.print(result)
      if (result.strike !== 3) result = {};
    }
    
  }
}

const app = new App();
app.play();

module.exports = App;
