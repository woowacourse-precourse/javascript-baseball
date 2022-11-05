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
 
  Input(){
      this.check=new Promise(function(resolve, reject){
      MissionUtils.Console.readLine('번호를 입력해주세요.', (answer) => {
        if (answer) {
          return resolve(answer.split(' ').join('').split(''));
        }
      })
    })
  }

  play() {
    this.GenerageNumber()
    this.Input()
    this.check.then(x=>this.Input_Number=x)
    

  }


}
let N=new App()
N.play()


module.exports = App;
