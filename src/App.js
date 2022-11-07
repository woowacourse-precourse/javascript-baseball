const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.Computer_Number=[]
    this.Input_Number;
  }

  guess(){
  while (this.Computer_Number.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1,9);
    if (!this.Computer_Number.includes(number)) {
      this.Computer_Number.push(number);
    }
  } 
}
  Printlog(strike,ball){
    if(strike===0){
      if(ball===0)
        MissionUtils.Console.print("낫싱")
      else{
        MissionUtils.Console.print(`${ball}볼`)  
      }
      this.inputValue();
    }else if(strike!==3){
      if(ball===0)
        MissionUtils.Console.print(`${strike}스트라이크`)
      else{
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
      }
      this.inputValue();
    }else if(strike===3){
      MissionUtils.Console.print(`${strike}스트라이크`)
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      this.replay()
    }  
  }
  CompareNumber(userNum, Computer_Number) {
    let strike = 0;
    let ball = 0;
    userNum.split("").forEach((item, idx) => {
      const index = Computer_Number.indexOf(item);
      if (Computer_Number[idx] === item && index > -1) {
        return (strike += 1);
      }
      if (index > -1) {
        return (ball += 1);
      }
    });
    this.Printlog(strike,ball)
  }

  replay() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
      (userNum) => {
        if (userNum === "1") {
          return start();
        }
        if (userNum === "2") {
          return end();
        }
        Console.close();
        throw new Error("잘못된 값을 입력하였습니다.");
      }
    );
  }

  end() {
    Console.print("게임종료");
    return Console.close();
  }

  inputValue(){
      MissionUtils.Console.readLine('숫자를 입력해주세요.', (inputValue) => {
        let inputValue_Arr=inputValue.split(' ').join('').split('').map(Number)
        const userNum = new Set(inputValue_Arr);
        if(userNum.size!==inputValue_Arr.length){
          throw("잘못된 값을 입력하였습니다.")
        }
        for(let i=0;i<inputValue_Arr.length;i++){
          if(isNaN(inputValue_Arr[i])){
            throw("잘못된 값을 입력하였습니다.")
          }
        }
        if (Input_Arr.length===3) {
          this.CompareNumber(Input_Arr, this.Computer_Number)
        }else{
          throw("잘못된 값을 입력하였습니다.")
        }
      })
  }
  play() {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
      this.guess()
      this.inputValue()
    }
}

module.exports = App;