const MissionUtils = require("@woowacourse/mission-utils");

class Question {
  static create() {
    const question = [];

    for (let index = 0; index < 3; index++) {
      while (true) {
        const nextNumber = MissionUtils.Random.pickNumberInRange(1, 9);

        if (question.includes(nextNumber)) continue;

        question.push(nextNumber);
        break;
      }
    }

    return question;
  }
}

module.exports = Question;
