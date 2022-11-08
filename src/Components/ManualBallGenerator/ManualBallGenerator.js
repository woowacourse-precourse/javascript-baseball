const { Console } = require("@woowacourse/mission-utils");

class AutomaticBallGenerator {
  maxNumberCount = 3;

  async execute() {
    return await new Promise((resolve, reject) => {
      Console.readLine("숫자를 입력해주세요 : ", (input) => {
        Console.close();

        this.isSatisfied(input) ? resolve(Number(input)) : reject(new Error());
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
}

module.exports = AutomaticBallGenerator;
