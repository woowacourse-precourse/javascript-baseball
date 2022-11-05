const MissionUtils = require("@woowacourse/mission-utils");
const ComputerRandomnumber = require("./ComputerRandomNumber");
const UserInput = require("./UserInput");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let Randomnumber = ComputerRandomnumber();
    UserInput(Randomnumber);
  }
}

const RegameorEnd = () => {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (input) => {
    if(input == 1){
      let Randomnumber = ComputerRandomnumber();
      UserInput(Randomnumber);
    }
    else if(input == 2){
      MissionUtils.Console.print("게임 종료");
      MissionUtils.Console.close();
    }
    else {
      MissionUtils.Console.print("1,2 둘중에 입력하세요!!");
    }
  });
};

module.exports = App;
exports.RegameorEnd = RegameorEnd;

