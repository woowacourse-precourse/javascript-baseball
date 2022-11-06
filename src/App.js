class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  
    
    const computer = init(MissionUtils);
    game(MissionUtils, computer);
  }
}

function init (MissionUtils){
  const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
        
      }
    }
    MissionUtils.Console.print(computer);
    return computer
}

function game(MissionUtils, computer) {
  var ballcount = 0;
  var strikecount = 0;
  var check = true;
  MissionUtils.Console.readLine("숫자를 입력하세요 : ", function(input) { 
    if (isNaN(input) || input.length != 3){
      throw new Error("3자리 숫자를 입력하세요");
    }

    if (input.charAt(0) == input.charAt(1) || input.charAt(0) == input.charAt(2) || input.charAt(1) == input.charAt(2)){
      throw new Error("3자리 숫자 모두 다르게 입력하세요");
    }
    
    for (var i = 0; i<3; i++){
      if (computer[0] == input.charAt(i)){
        if (i==0){
          strikecount++;
          break;
        }
        ballcount++;
      }
    }
    for (var i = 0; i<3; i++){
      if (computer[1] == input.charAt(i)){
        if (i==1){
          strikecount++;
          break;
        }
        ballcount++;
      }
    }
    for (var i = 0; i<3; i++){
      if (computer[2] == input.charAt(i)){
        if (i==2){
          strikecount++;
          break;
        }
        ballcount++;
      }
    }

    if (ballcount == 0 && strikecount == 0){
      MissionUtils.Console.print("낫싱");
    }
    else if (ballcount>0 && strikecount == 0){
      MissionUtils.Console.print(ballcount + "볼");
    }
    else if (strikecount>0 && ballcount == 0){
      MissionUtils.Console.print(strikecount + "스트라이크");
      if (strikecount == 3){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      }
    }
    else{
      MissionUtils.Console.print(ballcount + "볼 " + strikecount + "스트라이크");
    }
    game(MissionUtils, computer);
  });

}

var a = new App();
a.play();


module.exports = App;
