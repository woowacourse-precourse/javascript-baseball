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
  baseballCheck(){
    const COMPUTER_NUMBERS = this.cpuNum.split("");
    const USER_PREDICT_NUMBERS = this.predictNum.split("");
    let strike = 0, ball = 0;
    for(let sequenceNumber=0;sequenceNumber<3;sequenceNumber++){
      if(COMPUTER_NUMBERS[sequenceNumber] === USER_PREDICT_NUMBERS[sequenceNumber]){
        strike+=1;
      }else if(COMPUTER_NUMBERS.includes(USER_PREDICT_NUMBERS[sequenceNumber])){
        ball+=1;
      }
    }
    const answer = this.printBaseballCheck(strike, ball);
    MissionUtils.Console.print(answer);
    return strike;
  }
  printBaseballCheck(strike, ball){
    if(strike===0 && ball===0){
      return '낫싱'
    }else if(strike===0){
      return ball+'볼';
    }else if(ball===0){
      return strike+'스트라이크';
    }else{
      return ball+'볼 '+strike+'스트라이크';
    }
  }
  isCorrect(strike){
    if(strike === 3){
      this.gameClearMessage();
      return true;
    }else{
      return false;
    }
  }
  gameClearMessage(){
    return MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
  wantRegame() {
    MissionUtils.Console.readLine('숫자를 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (inputNum) => {
      const checkedInputNum = this.regameValidCheck(inputNum);
      return checkedInputNum;
    });
  }
  regameValidCheck(number){
    const isntNum = /[^1|2]/g;
    if(number.length!==1){
      throw new Error("1자리 숫자 (1 or 2) 를 입력해주세요");
    }
    if(isntNum.test(number)){
      throw new Error("숫자만 입력해주세요(1 or 2)");
    }
    return number;
  }
  play() {
    let correctState = false;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.makeRandomNumber();
    while(!correctState){
      this.receivePredictNum();
      const strikeCount = this.baseballCheck();
      correctState = this.isCorrect(strikeCount);
    }
    const REGAMENUMBER = this.wantRegame();
    if(REGAMENUMBER===1){
      this.play();
    }else{
      MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
      return 0;
    }
  }
}
const app = new App();
app.play();
module.exports = App;