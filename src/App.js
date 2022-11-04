const MissionUtils = require("@woowacourse/mission-utils");

class App {
  resultNumbers;
  constructor() {
    this.setNumbers();
  }

  // 숫자인지, 겹치는게 없는지, 3개만 입력했는지, 
  checkNumbers(inputNumber){
    if (isNaN(inputNumber)) {
      throw "숫자가 아닙니다.";
    }
    if (inputNumber.length > 3) {
      throw new Error("숫자가 초과했습니다.(3개만 입력)");
    }
    if ([...new Set(inputNumber.split(""))].length !== 3) {
      console.log([...new Set(inputNumber.split[""])]);
      throw "중복되는 숫자가 입력되었습니다.";
    }
  }
  
  setNumbers() {
    this.resultNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      this.checkNumbers(answer);
    });

  }
}

module.exports = App;
