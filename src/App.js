const MissionUtils = require("@woowacourse/mission-utils")
class App {
  constructor(){
    this.computer = this.getRandomNumbers();
  }

  getRandomNumbers(){
    const Numbers = [];
    while(Numbers.length < 3){
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if(!Numbers.includes(number)){
        Numbers.push(number)
      }
    }

    return Numbers
  }

  play() {}
}

module.exports = App;
