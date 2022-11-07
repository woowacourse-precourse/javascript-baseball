const MissionUtils = require("@woowacourse/mission-utils");

function randomComputerNum(){
  const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return number;
}

class App {

  start() {
    MissionUtils.Console.readLine('숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ', (answer) => {
      console.log(answer);
      Console.close();
    });
  }
  
  play() {}
}

module.exports = App;
