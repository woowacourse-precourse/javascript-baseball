const MissionUtils = require("@woowacourse/mission-utils");

const Computer = {
  answer: [],

  setAnswer() {
    this.answer = [];

    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      };
    };
  },
};

module.exports = Computer;