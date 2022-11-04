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
    
    let isFinished = false;
    while (!isFinished) {
      let userInput = 123 + '';
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        MissionUtils.Console.print(answer)
        MissionUtils.Console.close();
      });
      let result = {};

      
      randomNums.forEach((randomNum,i) => {
        if (randomNum === +userInput[i]) {
          result.strike = (result.strike ?? 0) + 1;
        } else if (randomNums.includes(+userInput[i])) {
          result.ball = (result.ball ?? 0) + 1;
        }
      })
      
      if (result.strike === 3) isFinished = true;
    }   
  }
}

const app = new App();
app.play();

module.exports = App;
