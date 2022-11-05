const MissionUtils = require("@woowacourse/mission-utils");

class ComputersNumber {
  constructor() {
      let correctAnswer = new Set();
      
      while (correctAnswer.size < 3) {
        correctAnswer.add(MissionUtils.Random.pickNumberInRange(1, 9));
      }
  
      MissionUtils.Console.print(correctAnswer);
      return Array.from(correctAnswer);
  }
}

module.exports = ComputersNumber;