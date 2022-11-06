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
      
    MissionUtils.Console.readLine("숫자를 입력하세요 : ", function(input) {
      if (isNaN(input) || input.length != 3){
        throw new Error("3자리 숫자를 입력하세요");
      }
      
      MissionUtils.Console.print("성공");
    });

  }
}


var a = new App();
a.play();


module.exports = App;
