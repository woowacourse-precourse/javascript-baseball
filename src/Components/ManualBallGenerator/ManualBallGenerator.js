const { Console } = require("@woowacourse/mission-utils");

const Ball = require("../Ball/Ball");

class ManualBallGenerator {
  maxNumberCount = 3;

  execute(callback) {
    const isSatisfied = this.isSatisfied.bind(this);

    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!isSatisfied(input)) throw new Error();

      callback(new Ball(Number(input)));
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

module.exports = ManualBallGenerator;
