const MissionUtils = require("@woowacourse/mission-utils");
class App {
  
  init(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
    }
    }
    this.randomnum=this.computer.join("")
    
  }
  
    

    
  
  inference(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (answer) => {
    
    try{
    const set=new Set(answer.split(""))
    if(set.size!=3){
      throw new Error("lengtherror")
    }
    if(answer<0){
      throw new Error("numError")
    }

  }
  catch (e) {
    throw new Error("제대로 된 숫자 3글자를 입력해주세요")
  }
    
    if(answer===this.randomnum){
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
      var answer=0;
      MissionUtils.Console.readLine('숫자를 입력해주세요 :', answer)
      
    }
    else{
    this.ballcount=0;
    this.strikecount=0;
    this.setcount(answer)
  }
    MissionUtils.Console.close();
  
    
  })

  }
  play() {
    this.init();
    var solve=false;
    
    console.log(this.randomnum)

    this.inference();
  }

}
const app = new App();
app.play();
// module.exports = App;
