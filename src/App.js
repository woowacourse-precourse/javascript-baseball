const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.Computer_Number=[]
    this.Input_Number;
  }

  GenerageNumber(){
  while (this.Computer_Number.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!this.Computer_Number.includes(number)) {
      this.Computer_Number.push(number);
    }
  } 
}
  Printlog(strike,ball){
    console.log("prtlog",strike,ball)
    if(strike===0){
      if(ball===0)
        MissionUtils.Console.print("낫싱")
      else{
        MissionUtils.Console.print(`${ball}볼`)  
      }
      this.Restart()
    }else if( strike===1){
      MissionUtils.Console.print(`${ball}볼1 스트라이크`)
      this.Restart()
    }else if(strike===2){
      MissionUtils.Console.print(`${ball}볼2 스트라이크`)
      this.Restart()
    }else if(strike===3){
      this.AllCorrect()
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    }  
  }
  CompareNumber(My_Number,Computer_Number){
    console.log(My_Number,Computer_Number)
    let strike=0;
    let ball=0;
    const find1 = My_Number.indexOf(Computer_Number[0]);
    const find2 = My_Number.indexOf(Computer_Number[1]);
    const find3 = My_Number.indexOf(Computer_Number[2]);
    if(find1>=0){
      if(find1===0){
        strike++;
      }else{
        ball++;
      }
    }
    if(find2>=0){
      if(find2===1){
        strike++;
      }else{
        ball++;
      }
    }
    if(find3>=0){
      if(find3===2){
        strike++;
      }else{
        ball++;
      }
    }
    this.Printlog(strike,ball)
  }

  Restart(){
    this.Input();
  }
  AllCorrect(){
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      answer=Number(answer)
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
      MissionUtils.Console.readLine('번호를 입력해주세요.', (answer) => {
        let temp=answer.split(' ').join('').split('').map(Number)
        for(let i=0;i<temp.length;i++){
          if(isNaN(temp[i])){
            throw("Request is failed")
          }
        }
        if (temp.length===3) {
          this.CompareNumber(temp, this.Computer_Number)
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

let N=new App()
N.play()

module.exports = App;