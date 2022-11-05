const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  startMessage() {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
   }
  
  pickedNum() {
    let correctAnswer = new Set();
      
    while (correctAnswer.size < 3) {
      correctAnswer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    return Array.from(correctAnswer);
  }
}

module.exports = Computer;