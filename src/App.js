let MissionUtils = require("@woowacourse/mission-utils");

class App {
  cpuNum;
  makeRandomNumber() {
    let num1 = MissionUtils.Random.pickNumberInRange(1, 9);
    let num2 =0, num3 = 0;
    do{ num2 = MissionUtils.Random.pickNumberInRange(1, 9);}
      while(num2 === num1);
    do{ num3 = MissionUtils.Random.pickNumberInRange(1, 9);}
      while(num3 === num2 && num3 === num1 );
    this.cpuNum = (num1.toString()+num2.toString()+num3.toString());
  }
  receivePredictNum() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputPredictNum) => {
      this.PredictNumvalidCheck(inputPredictNum);
      this.baseballCheck(this.cpuNum, inputPredictNum);
    });
    
  }
  PredictNumvalidCheck(predictNum){
    let numberIsDiff = new Set(predictNum).size;
    const IS_NOT_NUMBER = /[^1-9]/g;
    if(predictNum.length!==3){
      throw new Error("3자리 숫자를 입력해주세요");
    }
    if(predictNum.length!==numberIsDiff){
      throw new Error("서로 다른 숫자를 입력해주세요");
    }
    if(IS_NOT_NUMBER.test(predictNum)){
      throw new Error("숫자만 입력해주세요(1~9)");
    }
  }
  baseballCheck(cpuNumber, userPredictNumber){
    let strike = 0, ball = 0;
    for(let sequenceNumber=0;sequenceNumber<3;sequenceNumber++){
      if(cpuNumber[sequenceNumber] === userPredictNumber[sequenceNumber]){
        strike+=1;
      }else if(cpuNumber.includes(userPredictNumber[sequenceNumber])){
        ball+=1;
      }
    }
    this.printBaseballCheck(strike, ball);
    this.isCorrect(strike);
  }
  printBaseballCheck(strike, ball){
    let answer = '';
    if(strike===0 && ball===0){
      answer = '낫싱';
    }else if(strike===0){
      answer = ball+'볼';
    }else if(ball===0){
      answer = strike+'스트라이크';
    }else{
      answer = ball+'볼 '+strike+'스트라이크';
    }
    MissionUtils.Console.print(answer);
  }
  isCorrect(strike){
    if(strike === 3){
      this.gameClearMessage();
      this.wantRegame();
    }else{
      this.receivePredictNum();
    }
  }
  gameClearMessage(){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
  wantRegame() {
    MissionUtils.Console.readLine('숫자를 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (inputMenuNum) => {
      this.regameValidCheck(inputMenuNum);
      if(inputMenuNum==='1'){
        this.play();
      }else{
        MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
        MissionUtils.Console.close();
      }
    });
  }
  regameValidCheck(MenuNum){
    const IS_NOT_ONE_OR_TWO = /[^1|2]/g;
    if(MenuNum.length!==1){
      throw new Error("1자리 숫자 (1 or 2) 를 입력해주세요");
    }
    if(IS_NOT_ONE_OR_TWO.test(MenuNum)){
      throw new Error("숫자만 입력해주세요(1 or 2)");
    }
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.makeRandomNumber();
    this.receivePredictNum();
  }
}

module.exports = App;