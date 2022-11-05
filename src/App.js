const MissionUtils = require("@woowacourse/mission-utils");

class App {
  cpuNum;
  predictNum;
  makeRandomNumber() {
    const num1 = MissionUtils.Random.pickNumberInRange(0, 10);
    let num2 =0, num3 = 0;
    do{ num2 = MissionUtils.Random.pickNumberInRange(0, 10);}
      while(num2 === num1);
    do{ num3 = MissionUtils.Random.pickNumberInRange(0, 10);}
      while(num3 === num2 && num3 === num1 );

    return this.cpuNum = num1.toString()+num2.toString()+num3.toString();
  }
  receivePredictNum() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNum) => {
      const checkedInputNum = this.validCheck(inputNum);
      return this.predictNum = checkedInputNum;
    });
  }
  validCheck(number){
    const numberIsDiff = new Set(number).size;
    const isntNum = /[^0-9]/g;
    if(number.length!==3){
      throw new Error("3자리 숫자를 입력해주세요");
    }
    if(numberIsDiff!==3){
      throw new Error("서로 다른 숫자를 입력해주세요");
    }
    if(isntNum.test(number)){
      throw new Error("숫자만 입력해주세요(0~9)");
    }
    return number;
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.makeRandomNumber();
    this.receivePredictNum();
  }
}
const app = new App();
app.play();
module.exports = App;