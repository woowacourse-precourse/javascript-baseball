const MissionUtils = require("@woowacourse/mission-utils");

class App{
  constructor(){
    this.uniqueNumberList = [];
  }

  play(){}
    

  getRandumNumber(){
    const randomNumber = new Set();
    while(randomNumber.size !==3){
      randomNumber.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    const uniqueNumberList = [...randomNumber]
    return uniqueNumberList
  }
}
const app= new App();
console.log(app.getRandumNumber())

module.exports = App;
