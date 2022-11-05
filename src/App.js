const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.Computer_Number=[]
    this.Input_Number;
  }
  GenerageNumber(){
    for(let i=0;i<3;i++){
      this.Computer_Number.push(MissionUtils.Random.pickNumberInRange(0, 9))
    }
  } 
  Input(){
    //let result = str.split(' ').join('');
    MissionUtils.Console.readLine('번호를 입력해주세요.', (answer) => {
      this.Input_Number=answer.split(' ').join('').split('');
    });
  }

  play() {
    this.GenerageNumber()
    this.Input()
  }

}
let N=new App()
N.play()
module.exports = App;
