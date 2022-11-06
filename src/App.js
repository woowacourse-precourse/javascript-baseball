class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
        
      }
    }
    MissionUtils.Console.print(computer);
      
  }
}


var a = new App();
a.play();


module.exports = App;
