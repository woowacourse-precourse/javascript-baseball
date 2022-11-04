const MissionUtils = require("@woowacourse/mission-utils");

class App {
  cpuNum;
  makeRandomNumber(){
    const num1 = MissionUtils.Random.pickNumberInRange(0, 10);
    let num2 =0, num3 = 0;
    do{ num2 = MissionUtils.Random.pickNumberInRange(0, 10);}
      while(num2 === num1);
    do{ num3 = MissionUtils.Random.pickNumberInRange(0, 10);}
      while(num3 === num2 && num3 === num1 );

    return this.cpuNum = num1.toString()+num2.toString()+num3.toString();
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.makeRandomNumber();
    //MissionUtils.Console.print(this.cpuNum);
  }
}
const app = new App();
app.play();
module.exports = App;