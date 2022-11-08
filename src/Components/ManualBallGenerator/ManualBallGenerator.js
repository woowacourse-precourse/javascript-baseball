const { Console } = require("@woowacourse/mission-utils");

const Ball = require("../Ball/Ball");

class ManualBallGenerator {
  maxNumberCount = 3;

  async execute() {
    const NUMBER = await new Promise((resolve, reject) => {
      const callback = (input) => {
        Console.close();

        if (this.isSatisfied(input)) return resolve(Number(input));

        return reject(new Error());
      };

      Console.readLine("숫자를 입력해주세요 : ", callback);
    });

    return new Ball(NUMBER);
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

module.exports = ManualBallGenerator;
