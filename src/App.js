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
  CompareNumber(My_Number,Computer_Number){
    console.log(My_Number,Computer_Number)
    let strike=0;
    let ball=0;
    My_Number.map((element, index) => { console.log(element,Computer_Number[index])})
    let cnt=0;
    for(let i=0;i<3;i++){
      if(My_Number[i]===Computer_Number[i]){
        cnt++;
      }
    }
    if(cnt===0){
      MissionUtils.Console.print("낫싱")
      this.Restart()
    }else if(cnt===1){
      MissionUtils.Console.print("1볼 1스트라이크")
      this.Restart()
    }else if(cnt===2){
      MissionUtils.Console.print("1볼 2스트라이크료")
      this.Restart()
    }else if(cnt===3){
      this.AllCorrect()
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")

    }  
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
        if (temp.length<=3) {
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