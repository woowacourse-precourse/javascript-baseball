const MissionUtils = require("@woowacourse/mission-utils");
class App {
  
  init(){
    console.log("숫자 야구 게임을 시작합니다")
    const computer = [];
    while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
    computer.push(number);
    }
    }
    this.randomnum=computer.join("")
    
  }
  
  play() {
    this.init();
    var solve=false;
    
    console.log(this.randomnum)
    

    MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => {
      console.log(`닉네임: ${answer}`);
      
    });
  }
}
const app = new App();
      app.play();
// module.exports = App;
