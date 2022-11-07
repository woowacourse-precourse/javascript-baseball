const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.Computer_Number=[]
    this.Input_Number;
  }

  GenerageNumber(){
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
      this.Input();
    }else if(strike!==3){
      if(ball===0)
        MissionUtils.Console.print(`${strike}스트라이크`)
      else{
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
      }
      this.Input();
    }else if(strike===3){
      MissionUtils.Console.print(`${strike}스트라이크`)
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      this.AllCorrect()
    }  
  }
  CompareNumber(My_Number,Computer_Number){
    let strike=0;
    let ball=0;
    for(let place=0;place<3;place++){
      let find = My_Number.indexOf(Computer_Number[place]);
      if(find>=0){
        if(find===place){
          strike++;
        }else{
          ball++;
        }
      }
    }
    this.Printlog(strike,ball)
  }

  AllCorrect(){
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if(answer.length!==1)throw("Request is failed")
      answer=Number(answer)
      if(answer!==1&&answer!==2)throw("Request is failed")
      if(answer===1){
        this.Computer_Number=[]
        this.GenerageNumber();
        this.Input();
      }else if(answer===2){
        MissionUtils.Console.close();
    }
  })
  }
  Input(){
      MissionUtils.Console.readLine('번호를 입력해주세요.', (input) => {
        let Input_Arr=input.split(' ').join('').split('').map(Number)
        const overlap = new Set(Input_Arr);
        if(overlap.size!==Input_Arr.length){
          throw("Request is failed")
        }
        for(let i=0;i<Input_Arr.length;i++){
          if(isNaN(Input_Arr[i])){
            throw("Request is failed")
          }
        }
        if (Input_Arr.length===3) {
          this.CompareNumber(Input_Arr, this.Computer_Number)
        }else{
          throw("Request is failed")
        }
      })
  }
  play() {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
      this.GenerageNumber()
      this.Input()
    }
}

module.exports = App;