const MissionUtils = require("@woowacourse/mission-utils");

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
      throw "숫자만 입력해주세요";
    }
    if (number >= 1000 || number <= 99) {
      throw "3개의 숫자만 입력해주세요";
    }
    if (new Set(this.NumberToArray(number)).size !== 3) {
      throw "중복되지 않는 숫자로 입력해주세요";
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
