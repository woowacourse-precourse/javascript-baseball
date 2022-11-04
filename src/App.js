const MissionUtils = require("@woowacourse/mission-utils");

class App {
  nums = [1,2,3,4,5,6,7,8,9];
  COUNT = 3;
  
  play() {
    let randomNums = [];

    for (let i = 0; i < this.COUNT; i++) {
      const randomNum = MissionUtils.Random.pickNumberInList(this.nums);
      randomNums = [...randomNums, randomNum];
      
      const randomNumIndex = this.nums.indexOf(randomNum);
      this.nums = [...this.nums.slice(0, randomNumIndex),...this.nums.slice(randomNumIndex + 1)];
    }
  }
}

const app = new App();
app.play();

MissionUtils.Console.close();

// module.exports = App;
