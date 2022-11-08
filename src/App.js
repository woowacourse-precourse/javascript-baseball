const MissionUtils = require("@woowacourse/mission-utils");

class App {
   play() {
    this.start();
  }
  start(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  randomNumber(){
    let computer = [];
    for(let i = 0; i < 3; i++) {
      const randomN = MissionUtils.pickNumberInRange(1, 9);
      if (randomN[i] !== randomN[i-1]) {
        computer.push(randomN[i]);
      }
    }
  }


  
}


const app = new App();
app.play();



//module.exports = App;
