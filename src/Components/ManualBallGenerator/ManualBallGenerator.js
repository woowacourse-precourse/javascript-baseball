const { Console } = require("@woowacourse/mission-utils");

class ManualBallGenerator {
  maxNumberCount = 3;

  async execute() {
    return await new Promise((resolve, reject) => {
      Console.readLine("숫자를 입력해주세요 : ", (input) => {
        Console.close();

        this.isSatisfied(input)
          ? resolve(this.toNumberArray(input))
          : reject(new Error());
      });
    });
  }

  isSatisfied(input) {
    return (
      this.isNumber(input) &&
      this.hasMaxCount(input) &&
      this.isZeroExcluded(input)
    );
  }

  isNumber(input) {
    return !isNaN(input);
  }

  hasMaxCount(input) {
    return input.trim().length === this.maxNumberCount;
  }

  isZeroExcluded(input) {
    return !input.includes("0");
  }

  toNumberArray(input) {
    return input.trim().split("").map(Number);
  }
}

module.exports = ManualBallGenerator;
