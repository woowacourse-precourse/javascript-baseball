const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("../Constants/Message");

class NumberUtils {
  isNumber = (number) => {
    return !Number.isNaN(number) && typeof number === "number";
  };

  NumberToArray = (number) => {
    return Array.from(String(number), (num) => Number(num));
  };

  isBaseballNumber(number) {
    number = Number(number);
    if (!this.isNumber(number)) {
      throw ERROR_MESSAGE.NOT_NUMBER;
    }
    if (number >= 1000 || number <= 99) {
      throw ERROR_MESSAGE.NOT_THREE_LENGTH;
    }
    if (new Set(this.NumberToArray(number)).size !== 3) {
      throw ERROR_MESSAGE.NOT_DUPLICATED;
    }
    if (this.NumberToArray(number).includes(0)) {
      throw ERROR_MESSAGE.NOT_ZERO;
    }
  }

  getRandomBaseballNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      computer.add(number);
    }
    return Number(Array.from(computer).join(""));
  }
}

module.exports = NumberUtils;
