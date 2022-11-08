const { Console } = require("@woowacourse/mission-utils");

class ManualBallGenerator {
  maxNumberCount = 3;

  async execute() {
    return await new Promise((resolve, reject) => {
      const callback = (input) => {
        Console.close();

        if (this.isSatisfied(input)) return resolve(this.toNumberArray(input));

        return reject(new Error());
      };

      Console.readLine("숫자를 입력해주세요 : ", callback);
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
