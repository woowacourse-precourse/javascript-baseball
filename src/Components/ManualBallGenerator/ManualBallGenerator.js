const { Console } = require("@woowacourse/mission-utils");

class AutomaticBallGenerator {
  startNumber = 1;
  endNumber = 9;
  maxNumberCount = 3;

  async execute() {
    const INPUT = await new Promise((resolve) => {
      Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        Console.close();
        resolve(answer);
      });
    });

    return Number(INPUT);
  }
}

module.exports = AutomaticBallGenerator;
