const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

const error = {
  isValidResponse(answer) {
    return this.isNumberType(answer) && this.isDuplicate(answer) && this.isNumberType(answer);
  },

  isNumberType(answer) {
    return !Number.isNaN(Number(answer));
  },

  isThreeDigit(answer) {
    return answer.length === 3;
  },

  isDuplicate(answer) {
    return [...String(answer)].length === new Set([...String(answer)]).size;
  },
};

module.exports = error;
