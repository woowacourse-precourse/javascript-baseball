const MissionUtils = require("@woowacourse/mission-utils");

class makeNumber {
  setAnswerNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
    return numbers.join('')
  }
}