const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor() {
    this.Computer_Number=[]
    this.Input_Number;
    this.check=0;
  }
  GenerageNumber(){
    for(let i=0;i<3;i++){
      this.Computer_Number.push(MissionUtils.Random.pickNumberInRange(0, 9))
    }
  } 
 
  CompareNumber(My_Number,Computer_Number){
    console.log(My_Number,Computer_Number)
    let cnt=0;
    for(let i=0;i<3;i++){
      if(My_Number[i]===Computer_Number[i]){
        cnt++;
      }
    }
    if(cnt===0){
      console.log("낫싱")
      this.Restart()
    }else if(cnt===1){
      console.log("1개의 숫자를 모두 맞히셨습니다!")
      this.Restart()
    }else if(cnt===2){
      console.log("2개의 숫자를 모두 맞히셨습니다!")
      this.Restart()
    }else if(cnt===3){
      this.AllCorrect()
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    }  
  }

  Restart(){
    this.Input();
  }
  AllCorrect(){
    MissionUtils.Console.readLine('번호를 입력해주세요.', (answer) => {
      answer=Number(answer)
      if(answer===1){
        this.Input();
      }else if(answer===2){
        console.log(answer)
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
      this.GenerageNumber()
      this.Input()
    }
}
let N=new App()
N.play()


module.exports = App;