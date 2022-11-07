const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const inputNumber = answer.split('').map(Number);

      if(!this.vaildation(inputNumber)) { // 입력값이 유효하지 않으면 종료한다.
        MissionUtils.Console.close();
        return; 
      }

      MissionUtils.Console.close();
    });
  }

  vaildation(inputNumber) {
    if(inputNumber.length != 3) return false;
    return true;
  }
}

module.exports = App;