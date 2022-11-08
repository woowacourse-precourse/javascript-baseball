const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let random = [];
    let number;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    random = MissionUtils.Random.pickUniqueNumbersInRange(1,10,3);
    number = random.join('');
    while(true){
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer)=>{
        MissionUtils.Console.print(`${answer}`)
      })
      break;
    }
    
    MissionUtils.Console.close()
  }
}

module.exports = App;
