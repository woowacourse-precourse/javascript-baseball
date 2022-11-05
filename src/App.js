const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.Computer_Number=[]
  }
  GenerageNumber(){
    for(let i=0;i<3;i++){
      this.Computer_Number.push(MissionUtils.Random.pickNumberInRange(0, 9))
    }
  }
  play() {
    this.GenerageNumber()
  }

}
let N=new App()
N.play()
module.exports = App;
