const MISSION_Utils = require('@woowacourse/mission-utils');
class App {
  play() {
    MISSION_Utils.Console.print('숫자게임을 시작합니다');
    this.player = this.random();
    this.input();
  }
  input(){
    MISSION_Utils.Console.readLine('숫자를 입력해주세요: ', (input)=> {
      this.checkError(input);
      let strike = this.getStrike(input);
      let ball = this.getBall(input);
      this.Print(strike, ball);
    })
  }
  random(){
    let arr = [];
    while (arr.length < 3) {
      const number = MISSION_Utils.Random.pickNumberInRange(1, 9);
      if (!arr.includes(number)) {
        arr.push(number);
      } 
    }
  return arr;
  }
  checkError(input){
    if(Number.isNaN(input)){
      throw '잘못된 입력입니다.';
    }
    else if(input.length!==3){
      throw '3자리 수를 입력하세요.';
    }
    else if(input[0]===input[1]||input[1]===input[2]||input[0]===input[2]){
      throw '중복된숫자가 있습니다.';
    }
  }
  getStrike(input){
    let strike = 0;
    let inputnum = [...input];
    for(let i = 0;i<3;i++){
      if(this.player[i]===Number(inputnum[i])){
        strike++;
      }
    }
    return strike;
  }
  getBall(input){
    let ball = 0;
    let inputnum = [...input];
    for(let i = 0; i<3;i++){
      let indexOfCom = this.player.indexOf(Number(inputnum[i]));
      if(indexOfCom==-1){
        continue;
      }
      else if(indexOfCom!==i){
        ball++;
      }
    }
    return ball;
  }
  finish(){
    MISSION_Utils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MISSION_Utils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',(input)=>{
      if(Number(input)===1){
        this.play();
      }
      else if(Number(input)===2){
        MISSION_Utils.Console.close();
      }
      else{
        throw '잘못 입력하셨습니다.';
      }
    });
  }
  Print(strike, ball){
    if(strike===0 && ball===0){
      MISSION_Utils.Console.print('낫싱');
      this.input();
    }
    else if(strike===0 && ball>0){
      MISSION_Utils.Console.print(ball+'볼');
      this.input();
    }
    else if(strike>0 && ball>0){
      MISSION_Utils.Console.print(ball+'볼 '+strike+ '스트라이크');
      this.input();
    }
    else if(ball===0 && strike>0){
      if(strike===3){
        MISSION_Utils.Console.print(strike+'스트라이크');
        this.finish();
      }
      else{
        MISSION_Utils.Console.print(strike+'스트라이크');
        this.input();
      }
    }
  }
}

module.exports = App;
