// const rata = "aer";
// console.log(rata);
const MissionUtils = require("@woowacourse/mission-utils");
const GameStartMsg = require("./GameStartMsg");

// const RandomNum = require("./RandomNum");
// const ComputerOutput = require("./ComputerOutput");
// const UserInput = require("./UserInput");


// const ReGameMsg = require("./ReGameMsg")

class App {


  constructor(userInput) {
    this.userInput = userInput;
    
  }

  play() {
    try{
      GameStartMsg() // 얘는 바로 실행해서 출력
      const GetError = require("./GetError");
      GetError.userInputNum // 얘는 펑션을 여기서 돌려주는게 아니라 그 모듈에서 돌리는 거??

      const Referee = require("./Referee");
      Referee.ballsAndStrikes
    }
    catch (err) {
      MissionUtils.Console.print("에러발견");
     }
  }
}

const app = new App();
app.play();

module.exports = App;
