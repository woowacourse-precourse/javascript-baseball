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
      this.ballcount=0;
      this.strikecount=0;
      
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
      MissionUtils.Console.print(`0볼 3스트라이크`)
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      // MissionUtils.Console.close();
      
      this.restart()
      
    }
    else{
    this.ballcount=0;
    this.strikecount=0;
    
    for(var i=0;i<3;i++){
      if(this.computer[i]==answer[i]){
        this.strikecount++;
      }
      else if(answer.includes(this.computer[i])){
        this.ballcount++;
      }
    }
    if(this.ballcount>0&&this.strikecount>0){
      MissionUtils.Console.print(`${this.ballcount}볼 ${this.strikecount}스트라이크`)
    }
    else if(this.ballcount>0&&this.strikecount==0){
      MissionUtils.Console.print(`${this.ballcount}볼`)
    }
    else if(this.ballcount==0&&this.strikecount>0){
      MissionUtils.Console.print(`${this.strikecount}스트라이크`)
    }
    else{
      MissionUtils.Console.print(`낫싱`)
    }
    this.inference();
  }
    
  
    
  })

  }
  play() {
    this.init();
    var solve=false;
    
    console.log(this.randomnum)

    this.inference();
  }
  restart(){
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
      if(answer=='1'){
        this.play();
      }
      else{
        MissionUtils.Console.close();
      }
    })
  }

}
// const app = new App();
// app.play();
module.exports = App;
